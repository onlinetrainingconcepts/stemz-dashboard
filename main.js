class Dashboard {
	constructor(dashboard, defaultTabIndex) {
		this.dashboard = dashboard;
		this.adminPanel = this.dashboard.querySelector('.dashboard__panel');
		this.resizer = this.dashboard.querySelector('.dashboard__panel-resizer');
		this.resizeBtn = this.dashboard.querySelector('.dashboard__panel-resize');
		this.resizeArrow = this.resizeBtn.querySelector('span');
		this.nav = this.dashboard.querySelector('.dashboard__nav');
		this.navButtons = this.dashboard.querySelectorAll(
			'.dashboard__nav--button'
		);
		this.header = this.dashboard.querySelector('.dashboard__header--text');
		this.contentContainer = this.dashboard.querySelector('.dashboard__content');
		this.defaultTabIndex = defaultTabIndex;

		// panel open state
		this.open;

		// sets initial panel open state
		if (this.adminPanel.offsetWidth === 347) {
			this.resizeArrow.classList.add('dashboard__panel-resize--open');
			this.open = true;
		} else {
			this.resizeArrow.classList.add('dashboard__panel-resize--closed');
			this.open = false;
		}

		// initiates events on load
		document.addEventListener(
			'DOMContentLoaded',
			this.initiateDashboard(this.navButtons)
		);

		// ensures default content shows on load
		this.navButtons[this.defaultTabIndex].click();

		this.resizer.addEventListener('mousedown', this.handleResize);
		this.resizeBtn.addEventListener('click', this.handleResizeClick);
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

	// handles event for panel slider
	handleResize = (event) => {
		const panelInfo = this.adminPanel.getBoundingClientRect();
		const initialWidth = panelInfo.width;
		let prevX = event.clientX;

		this.mouseMove = (event) => {
			const newX = prevX - event.clientX;
			const newWidth = initialWidth - newX;
			this.adminPanel.style.width = `${newWidth}px`;

			// conditions will check panel witdh and orient arrow appropriately
			if (newWidth < 347) {
				this.resizeArrow.classList.remove('dashboard__panel-resize--open');
				this.resizeArrow.classList.add('dashboard__panel-resize--closed');
				this.open = false;
			}

			if (newWidth > 347) {
				this.resizeArrow.classList.remove('dashboard__panel-resize--closed');
				this.resizeArrow.classList.add('dashboard__panel-resize--open');
				this.open = true;
			}
		};

		this.mouseUp = () => {
			window.removeEventListener('mousemove', this.mouseMove);
			window.removeEventListener('mouseup', this.mouseUp);
		};

		window.addEventListener('mousemove', this.mouseMove);
		window.addEventListener('mouseup', this.mouseUp);
	};

	// handles event for expand/collapse button
	handleResizeClick = (event) => {
		event.stopPropagation();
		this.adminPanel.classList.add('dashboard__panel-resize--activate');

		// adds/removes class that apply transition efect to width property
		// property is remove once function completes to prevent
		// transition effect to be applied when manually re-sizing panel
		if (this.open) {
			this.resizeArrow.classList.remove('dashboard__panel-resize--open');
			this.resizeArrow.classList.add('dashboard__panel-resize--closed');
			this.adminPanel.style.width = '50px';
			this.open = false;
		} else {
			this.resizeArrow.classList.remove('dashboard__panel-resize--closed');
			this.resizeArrow.classList.add('dashboard__panel-resize--open');
			this.adminPanel.style.width = '347px';
			this.open = true;
		}

		// Listen for the 'transitionend' event to remove the class after the transition is complete
		this.adminPanel.addEventListener('transitionend', () => {
			this.adminPanel.classList.remove('dashboard__panel-resize--activate');
			this.adminPanel.removeEventListener('transitionend', () => {});
		});
	};
}

let dashboardArray = [];

// programmatically creates dashboard logic for every dashboard on a page
document.querySelectorAll('.dashboard').forEach((dashboard, index) => {
	dashboardArray[index] = new Dashboard(dashboard, 0);
});
