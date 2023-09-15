// variables
const tabButtons = document.querySelectorAll('.dashboard__nav--button');
const headerText = document.querySelector('.dashboard__header--text');
const tabContent = document.querySelectorAll('.tabcontent');

function initializeDefaultView() {
	// ensures the first tab is actie when page loads
	tabButtons[0].classList.add('active');
	// hides all the tab content sections except the first one
	tabContent.forEach((tab, index) => {
		if (index > 0) {
			tab.style.display = 'none';
		}
	});
}

initializeDefaultView();

function openTab(e, tab) {
	// upon click, hides all content
	tabContent.forEach((div) => {
		div.style.display = 'none';
	});
	// upon click, removes active classes of tab buttons
	tabButtons.forEach((nav) => {
		nav.classList.remove('active');
	});
	// shows current content div
	document.getElementById(tab).style.display = 'block';
	// adds active class to current tab button
	e.currentTarget.classList.add('active');
	// changes header text
	headerText.innerText = e.currentTarget.innerText;
}
