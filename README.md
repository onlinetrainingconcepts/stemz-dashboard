# Stemz Dashboard Documentation

The custom Dashboard component allows the for creation of dashboards for different users such as buyers and farmer. The code works in conjuction with the WordPress plugin [Unlimited Elements for Elementor](https://unlimited-elements.com/). This plugin offers developers the ability to create custom dynamic components for the Elementor page builder. This way, a developer may create the necessary components for a site while utilizing the ease of use that Elementor is known for.

Below is how to add a dashboard to a page using Elementor and customize it based on specific needs.

## Dashboard Basics

1. Log into the WordPress site and access the backend dashboard.
2. Click **Pages** then locate the page you wish to edit and select **Edit with Elementor**.
3. Once the page is loaded, access the Elementor elements panel. Search for the element “*Stemz Dashboard*.” Drag that element into a container within the page.
4. Add a Dashboard ID and specify who the dashboard is for. Both of these should be unique. for example, the ID should be “*buyer_dashboard*,” and “buyer” as the Dashboard intent. This is a very important step. Skipping this will result in a dashboard that does not operate as intended.
5. Click the Items drop down to add tab buttons to the Dashboard.
6. Each tab button needs a title, a tab number, and an image. Number the tab according to the placement of the tab in the series. Before adding images, make sure the desired icons have been added to the WordPress media library.
7. The tab content should only contain a WordPress shortcode. If a new tab needs to be created, please consult with the development team on the creation of a shortcode that will output the desired content.
8. Once everything in the Dashboard has been added, click **Update** to save the changes.
9. Review the page to make sure the Dashboard functions as expected and contains the correct content.

## Styling and Positioning

Follow these directions for the best presentation of the Stemz Dashboard

1. Locate and click on the **Edit Selection** button for the page section.
2. Under the Layout section, click the **Content Width** drop down and select “*Full Width*.”
3. If the Dashboard realigns to the left side of the page, click the **Advanced** section and under the **Custom CSS** tab, add the following code:
```
  .dashboard {
    margin: 0 auto;
  }
```

## Troubleshooting

Consult these tips when the dashboard isn't functioning correctly

- Make sure that each tab is numbered accordingly. For example, it’s possible to assign two tabs be be tab one. This will prevent the tabs from showing the correct information.
- Make sure that the Dashboard has a both unique ID added as well an intended role added.
