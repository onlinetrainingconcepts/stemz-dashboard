function initializeTabs() {
	document.querySelectorAll('.dashboard__nav--button').forEach((button) => {
		button.addEventListener('click', () => {
			// variables
			const nav = button.parentElement;
			const contentContainer = nav.parentElement.parentElement.childNodes[11];
			const tabNumber = button.dataset.forTab;
			const tabToActivate = contentContainer.querySelector(
				`.tabcontent[data-tab="${tabNumber}"]`
			);
			const header = contentContainer.parentElement.querySelector(
				'.dashboard__header--text'
			);
			const headerText = button.querySelector(
				'.dashboard__nav--button-text'
			).innerText;

			console.log(header);

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
}

document.addEventListener('DOMContentLoaded', () => {
	initializeTabs();
	// clicks the first button so inital tab will show on default
	document.querySelector('.dashboard__nav--button').click();
});
