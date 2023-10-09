class Dashboard {
	constructor(dashboard, dashboardName) {
		this.dashboard = dashboard;
		this.dashboardName = dashboardName;
		const domDashboard = document.getElementById(dashboard.id);
		const nav = domDashboard.querySelector('.dashboard__nav');
		const contentContainer = domDashboard.querySelector('.dashboard__content');
		const header = domDashboard.querySelector('.dashboard__header--text');

		domDashboard
			.querySelectorAll(`.dashboard__nav--button`)
			.forEach((button) => {
				button.addEventListener('click', () => {
					// variables
					const tabNumber = button.dataset.forTab;
					const tabToActivate = contentContainer.querySelector(
						`.tabcontent[data-tab="${tabNumber}"]`
					);
					const headerText = button.querySelector(
						'.dashboard__nav--button-text'
					).innerText;

					// removes active status on all buttons
					nav.querySelectorAll('.dashboard__nav--button').forEach((button) => {
						button.classList.remove('active');
					});

					// removes active status on all tabs
					contentContainer.querySelectorAll('.tabcontent').forEach((tab) => {
						tab.classList.remove('tabcontent--active');
					});

					// adds active class to selected button
					button.classList.add('active');

					// adds active class to associated tab
					tabToActivate.classList.add('tabcontent--active');

					// adds text to header
					header.innerText = headerText;
				});
			});

		// clicks the first button in the nav in order to have the first tab show by default
		document.addEventListener('DOMContentLoaded', () => {
			domDashboard.querySelector('.dashboard__nav--button').click();
		});
	}
}

const dashboards = [];

document.querySelectorAll('.dashboard').forEach((dashboard, num) => {
	dashboards[num] = new Dashboard(dashboard, dashboard.dataset.dashboard);
});
