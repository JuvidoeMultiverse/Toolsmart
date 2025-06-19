import { getTooljetEdition } from '@helpers/utils.helper';
import { TOOLJET_EDITIONS } from '@modules/app/constants';
import { MigrationInterface, QueryRunner } from 'typeorm';
export class FillOwnerInOrganizations1749765995701 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const edition: TOOLJET_EDITIONS = getTooljetEdition() as TOOLJET_EDITIONS;
    // If edition is not cloud, skip this migration
    if (edition !== 'cloud') {
      console.log('Migration is only restricted for cloud edition.');
      return; // Exit the migration early
    }
    const BATCH_SIZE = 1000;
    let lastProcessedCreatedAt = new Date(0);

    let continueUpdating = true;

    while (continueUpdating) {
      const result = await queryRunner.query(
        `
        WITH orgs_cte AS (
          SELECT org.id AS org_id, ugp.user_id AS new_owner, org.created_at
          FROM organizations org
          LEFT JOIN group_permissions gp ON gp.organization_id = org.id
          LEFT JOIN user_group_permissions ugp ON ugp.group_permission_id = gp.id
          WHERE org.created_at > $1 AND gp.group = 'admin'
          ORDER BY org.created_at ASC
          LIMIT ${BATCH_SIZE}
        )
        
        UPDATE organizations org 
        SET owner_id = orgs_cte.new_owner
        FROM orgs_cte
        WHERE org.id = orgs_cte.org_id
        RETURNING org.created_at
        `,
        [lastProcessedCreatedAt.toISOString()]
      );

      // If no rows are updated, stop the loop
      if (result.length === 0) {
        continueUpdating = false;
      } else {
        const lastCreatedAt = result[result.length - 1].created_at;
        if (lastCreatedAt && !isNaN(new Date(lastCreatedAt).getTime())) {
          lastProcessedCreatedAt = new Date(lastCreatedAt);
        } else {
          continueUpdating = false;
        }
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
