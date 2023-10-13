class Dashboard {
	constructor(dashboard, defaultTabIndex) {
		this.dashboard = dashboard;
		this.adminPanel = this.dashboard.querySelector('.dashboard__panel');
		this.resizer = this.dashboard.querySelector('.dashboard__panel-resizer');
		this.nav = this.dashboard.querySelector('.dashboard__nav');
		this.navButtons = this.dashboard.querySelectorAll(
			'.dashboard__nav--button'
		);
		this.header = this.dashboard.querySelector('.dashboard__header--text');
		this.contentContainer = this.dashboard.querySelector('.dashboard__content');
		this.defaultTabIndex = defaultTabIndex;

		// initiates events on load
		document.addEventListener(
			'DOMContentLoaded',
			this.initiateDashboard(this.navButtons)
		);

		// ensures default content shows on load
		this.navButtons[this.defaultTabIndex].click();

		this.resizer.addEventListener('mousedown', this.handleResize);
	}

	initiateDashboard(buttons) {
		buttons.forEach((button) => {
			button.addEventListener('click', () => {
				// variables
				const tabNumber = button.dataset.forTab;
				const tabToActivate = this.contentContainer.querySelector(
					`.tabcontent[data-tab="${tabNumber}"]`
				);
				const headerText = button.querySelector(
					'.dashboard__nav--button-text'
				).innerText;

				// removes active status on all buttons
				this.navButtons.forEach((button) => {
					button.classList.remove('active');
				});

				// removes active status on all tabs
				this.contentContainer.querySelectorAll('.tabcontent').forEach((tab) => {
					tab.classList.remove('tabcontent--active');
				});

				// adds active class to selected button
				button.classList.add('active');

				// adds active class to associated tab
				tabToActivate.classList.add('tabcontent--active');

				// adds text to header
				this.header.innerText = headerText;
			});
		});
	}

	handleResize = (event) => {
		const panelInfo = this.adminPanel.getBoundingClientRect();
		const initialWidth = panelInfo.width;
		let prevX = event.clientX;

		this.mouseMove = (event) => {
			const newX = prevX - event.clientX;
			const newWidth = initialWidth - newX;
			this.adminPanel.style.width = `${newWidth}px`;
		};

		this.mouseUp = () => {
			window.removeEventListener('mousemove', this.mouseMove);
			window.removeEventListener('mouseup', this.mouseUp);
		};

		window.addEventListener('mousemove', this.mouseMove);
		window.addEventListener('mouseup', this.mouseUp);
	};
}

let dashboardArray = [];

document.querySelectorAll('.dashboard').forEach((dashboard, index) => {
	dashboardArray[index] = new Dashboard(dashboard, 0);
});
