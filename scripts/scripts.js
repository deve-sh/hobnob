const MINTIMEGAP = 80;

(function typeHeading(){
	const heading = "We are Hobnob!";
	const headingNode = document.getElementById("introheading");
	let i = 0;

	let interval = setInterval(() => {
		if(headingNode.textContent === heading)
			interval = clearInterval(interval);
		else{
			headingNode.textContent += heading[i];
			i++;
		}
	}, MINTIMEGAP);
})();

const openSidenav = () => {
	let sidenavNode = document.getElementById("sidenav");

	if (!sidenavNode) throw new Error(NODEERROR);

	if (screen.width > 500) {
		sidenavNode.style.width = "15.625rem";
	} else sidenavNode.style.width = "100%";
};

const closeSidenav = () => {
	let sidenavNode = document.getElementById("sidenav");

	if (!sidenavNode) throw new Error(NODEERROR);

	sidenavNode.style.width = "0";
};