const headerText = document.querySelector('.dashboard__header--text');

console.log(headerText);

const navList = document.querySelectorAll('.dashboard__nav--button');
// navList.forEach((nav) => {
//   console.log(nav.innerHTML)
// })

const tabContent = document.querySelectorAll('.tabcontent');

// initializes the default view of the dashboard
navList[0].classList.add('active');
for (let i = 1; i < tabContent.length; i++) {
	tabContent[i].style.display = 'none';
}

function openTab(e, tab) {
	//   for(let i = 0; i < tabContent.length; i++) {
	//   tabContent[i].style.display = 'none'
	//  }
	tabContent.forEach((div) => {
		div.style.display = 'none';
	});
	navList.forEach((nav) => {
		nav.classList.remove('active');
	});

	document.getElementById(tab).style.display = 'block';
	e.currentTarget.classList.add('active');
	headerText.innerText = e.currentTarget.innerText;
}
