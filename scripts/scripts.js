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