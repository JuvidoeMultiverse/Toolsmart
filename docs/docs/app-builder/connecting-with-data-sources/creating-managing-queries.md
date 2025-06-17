---
id: "creating-managing-queries"
title: "Creating and Managing Queries"
---

A query is a way to interact with your **[data sources](/docs/data-sources/overview)** and acts as the link between your app’s UI and your data. You can connect your app to configured data sources—including SQL, NoSQL, vector databases, APIs, spreadsheets, and cloud services—by creating them. Whether it’s retrieving records from your MongoDB collection or updating data in a SQL database, you can use queries to interact with them.

Queries are created in the Query Panel, located at the bottom of the App Builder, where y ou can either use a visual form-based builder or write code/SQL manually.

<img className="screenshot-full img-full" src="/img/app-builder/connecting-with-datasouces/query-panel.png" alt="App Builder: Query Panel"/>


## Creating a New Query

- Click on the **+** button in the Query Panel to open a menu listing the available data sources or you can add a new data source by clicking on **+ Add new Data Source** button.
- Select your the desired data source.

<img className="screenshot-full img-s" src="/img/app-builder/connecting-with-datasouces/create-query.png" alt="App Builder: Create queries"/>

## Configuring the Query

The query configuration interface varies depending on the type of data source you've chosen. If you are using any SQL data source, you can configure your query using either GUI mode or SQL mode. Rest of the data sources can be configured using form-based GUI.

### GUI mode

- For the Postgres data source, when using GUI mode (as shown in the image below), you’ll need select the operations you want to perform and then fill out the required fields.
    <img className="screenshot-full img-full" src="/img/app-builder/connecting-with-datasouces/gui-mode.png" alt="App Builder: configure PostgreSQL queries"/>

- In this example using the AWS S3 data source, you can perform the **Upload object** operation to upload a file to an S3 bucket. You’ll need to provide details such as the bucket name, key, and other relevant parameters based on the selected operation.

    <img className="screenshot-full img-full" src="/img/app-builder/connecting-with-datasouces/aws-gui.png" alt="App Builder: configure AWS S3 queries"/>


### SQL mode

For data sources such as MYSQL, PostgreSQL or SQL Server, you can choose SQL mode where you can write the SQL query to perform your desired operation. 

<img className="screenshot-full img-full" src="/img/app-builder/connecting-with-datasouces/sql-mode.png" alt="App Builder: configure PostgreSQL queries"/>


<!-- ## JavaScript and Python queries

You can also create JavaScript or Python queries to manipulate your data from other queries, write business logic, or integrate third-party libraries. Learn more about them in **[Running JavaScript](/docs/data-sources/run-js)** and **[Running Python](/docs/data-sources/run-py)** documentation. -->

## Custom Parameters
You often need a query to fetch different data based on on user input, component state, or other logic. Custom parameters allow you to pass dynamic values into a query, making it reusable without hardcoding values.

Let's say you have a query that fetches employee details based on department. Instead of creating a separate query for each department, you can define a parameter like `departmentName`, and use it to filter results dynamically.

To add parameters, simply click the **+ Add** button next to the Parameters label in the query editor.

For each parameter, you need to specify:
- **Name**: The identifier for the parameter.
- **Default value**: This value can be a constant string, number, or object.

**Syntax for utilizing the parameter:** Employ `parameters.<identifier>` in your query. It's important to note that parameters can only be utilized within the specific query where they are defined.

Learn more about **[Using Custom Parameters](/docs/how-to/use-custom-parameters)**.

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/newui3/queryparams-v2.png" alt="Custom Parameters" style={{marginBottom:'15px'}}/>

## Preview and Run

Before connecting a query to your app’s UI, use the Preview button to check what it returns. This is especially useful when working with external APIs or complex SQL, you can inspect the raw or JSON response, debug any issues, and make sure the data matches what your components need.

Once things look good, use the Run button to execute the query and verify how it interacts with your components and other queries.

<!-- ##  Transformations

When working with real-world applications, the data you receive from APIs or databases often needs customization before displaying it in the components sometimes. You might want to show only certain fields, format timestamps, or map values into a specific data structure. That’s where Transformations come in.

For example, after fetching a list employees from an API for your application, you may only want to display the *id*, *name*, *status*, and *created_at* fields. You can transform the response with JavaScript (or Python), inside trasformation tab of the query to return just the data your component needs.

<img className="screenshot-full img-full" style={{ marginBottom:'15px'}} src="/img/app-builder/connecting-with-datasouces/transformation_.png" alt="App Builder: query transformations"/>

Refer to the **[Transformations](/transformations)** section to learn more about how to use Transformations in your queries.  -->

<!-- ## Events

Events let you trigger actions when a query runs successfully or fails. These actions are similar to the actions performed in components, but they're specifically tied to query execution outcomes. You can create the events under the **Settings** tab in the query editor.

Let’s say you have a form that updates a request using a query called *updateEmployeeDetail*. Once the update is successful, you probably want your app to refresh the data automatically so the user sees the latest changes. You can do this by triggering another query, like *getEmployees* in the onSuccess event of *updateEmployeeDetail*. This way, users don’t have to refresh the page or click another button to see updated information. 

<img className="screenshot-full img-full" style={{ marginBottom:'15px'}} src="/img/app-builder/connecting-with-datasouces/events.png" alt="App Builder: query events"/> -->

## Triggers

Triggers allow you to control when and how a query executes within your application. You can find them under the **Settings** tab in the query editor. Following are the triggers available:

### Run this query on application load 

You can use this when you want data to be available as soon as the page loads, like auto-fetching a user’s dashboard data or populating dropdown options without requiring user input.

### Request confirmation before running query 
For actions that modify or delete data, enable this to prompt users for confirmation. It acts as a safeguard against accidental clicks that could alter critical records.
     <img className="screenshot-full img-l" style={{ marginBottom:'15px'}} src="/img/app-builder/connecting-with-datasouces/confirm.png" alt="App Builder: confirmation dialog"/>

### Show notification on success 
Let users know when actions are completed successfully. This improves UX by giving real-time feedback. You can customize the message and how long it stays visible.
        <img className="screenshot-full img-l" style={{ marginBottom:'15px'}} src="/img/app-builder/connecting-with-datasouces/notification.png" alt="App Builder: notification on query run"/>
### Retry on network errors 
This setting is only available forREST API queries. Here, you get an option to automatically retry REST API requests in case of certain network errors or specific HTTP status codes. By default, it retries a failed API request up to 3 times before marking it as failed. Refer to [REST API Documentation](/docs/data-sources/restapi/querying-rest-api/#retry-on-network-errors) for more details.



