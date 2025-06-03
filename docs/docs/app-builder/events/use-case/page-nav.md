---
id: page-nav
title: Page Navigation Through Actions
---

ToolJet enables seamless navigation between different pages of your app using event handlers and actions. You can also pass query parameters during navigation, making it easy to share context between pages. This is especially useful when you don't want to use the built in navigation menu and build a custom navigation component or when you wish to share relevant data with another page.

## Building Custom Navigation Menu

Follow these steps to build a custom navigation menu:

1. Add a container to serve as your navigation wrapper.
2. Place icons, text or button components inside the container for each page you want to link to.
3. For each navigation item:
    - Select the component (icon or text).
    - Add a event handler.
        - Event: **On click**
        - Action: **Switch page**
        - Page: *Select the target page from the dropdown.*

<img className="screenshot-full img-full" src="/img/app-builder/events/page-nav/nav-bar.png" alt="Events Architecture Diagram"/> <br/><br/>

Once configured, clicking on a navigation item will take the user to the corresponding page.

<img className="screenshot-full img-full" src="/img/app-builder/events/page-nav/nav-dig.png" alt="Events Architecture Diagram"/>

## Passing Data Between Pages

Suppose you're building a ticket management system where Page 1 displays a list of all tickets, and clicking on a ticket redirects the user to Page 2, which shows the details of the selected ticket. Here's how to set it up:

1. On Page 1, display all the tickets using a **Table** component.
2. Add an event handler to the table:
    - Event: **Row clicked**
    - Action: **Switch page**
    - Page: **Page 2** *(Select the ticket details page.)*
    - Query parameters:
        - **Key**: `ticketId`
        - **Value**: `{{components.ticketTable.selectedRow.ticket_id}}`
3. On Page 2, design the UI to display the ticket details.
4. Use the query parameter to fetch or display the selected ticket's data:
    - Reference it with: `{{globals.urlparams.ticketId}}`

This setup enables users to click on a ticket in the table and seamlessly navigate to a detailed view of that specific ticket, with the necessary data passed between pages using query parameters.