import { DynamicModule } from '@nestjs/common';
import { getImportPath } from '@modules/app/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from '@entities/organization.entity';
import { OrganizationGitSync } from '@entities/organization_git_sync.entity';
import { OrganizationGitSsh } from '@entities/gitsync_entities/organization_git_ssh.entity';
import { OrganizationGitHttps } from '@entities/gitsync_entities/organization_git_https.entity';
import { AppVersion } from '@entities/app_version.entity';
import { ImportExportResourcesModule } from '@modules/import-export-resources/module';
import { TooljetDbModule } from '@modules/tooljet-db/module';
import { AppsModule } from '@modules/apps/module';
import { VersionModule } from '@modules/versions/module';
import { AppGitSync } from '@entities/app_git_sync.entity';
import { OrganizationGitLab } from '@entities/gitsync_entities/organization_gitlab.entity';

export class GitSyncModule {
  static async register(configs?: { IS_GET_CONTEXT: boolean }): Promise<DynamicModule> {
    const { GitSyncController } = await import(`${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/controller`);
    const { GitSyncService } = await import(`${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/service`);
    const { SourceControlProviderService } = await import(
      `${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/source-control-provider`
    );
    const { SSHGitSyncService } = await import(
      `${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/providers/github-ssh/service`
    );
    const { HTTPSGitSyncService } = await import(
      `${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/providers/github-https/service`
    );
    const { GitLabGitSyncService } = await import(
      `${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/providers/gitlab/service`
    );
    const { HTTPSGitSyncUtilityService } = await import(
      `${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/providers/github-https/util.service`
    );
    const { SSHGitSyncUtilityService } = await import(
      `${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/providers/github-ssh/util.service`
    );
    const { GitLabGitSyncUtilityService } = await import(
      `${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/providers/gitlab/util.service`
    );
    const { BaseGitUtilService } = await import(
      `${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/base-git-util.service`
    );
    const { BaseGitSyncService } = await import(
      `${await getImportPath(configs?.IS_GET_CONTEXT)}/git-sync/base-git.service`
    );
    return {
      module: GitSyncModule,
      imports: [
        TypeOrmModule.forFeature([
          AppGitSync,
          OrganizationGitSync,
          Organization,
          OrganizationGitSsh,
          OrganizationGitHttps,
          OrganizationGitLab,
          AppVersion,
        ]),
        await ImportExportResourcesModule.register(configs),
        await TooljetDbModule.register(configs),
        await AppsModule.register(configs),
        await VersionModule.register(configs),
        // await LicenseModule.register(configs),
      ],
      controllers: [GitSyncController],
      providers: [
        GitSyncService,
        SourceControlProviderService,
        SSHGitSyncService,
        HTTPSGitSyncService,
        GitLabGitSyncService,
        HTTPSGitSyncUtilityService,
        SSHGitSyncUtilityService,
        GitLabGitSyncUtilityService,
        BaseGitUtilService,
        BaseGitSyncService,
      ],
      exports: [HTTPSGitSyncUtilityService, SSHGitSyncUtilityService, GitLabGitSyncUtilityService],
    };
  }
}
