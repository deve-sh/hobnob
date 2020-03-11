const MINTIMEGAP = 80;

(function typeHeading() {
	const heading = "We are Hobnob!";
	const headingNode = document.getElementById("introheading");
	let i = 0;

	let interval = setInterval(() => {
		if (headingNode.textContent === heading)
			interval = clearInterval(interval);
		else {
			headingNode.textContent += heading[i];
			i++;
		}
	}, MINTIMEGAP);
})();

(() => {
	let anchors = document.getElementsByTagName("a");

	for (let i in anchors) {
		if (anchors[i].hash) {
			anchors[i].addEventListener("click", e => {
				e.preventDefault();
				scrollToElement(anchors[i].hash);
			});
		}
	}
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

/* Smooth scroll to anchor links. */

const scrollToElement = (elementSelector = "") => {
	let element = document.querySelector(elementSelector);

	if (!element) throw new Error(NODEERROR);

	const top = element.getBoundingClientRect().top + window.pageYOffset;

	window.scrollTo({
		top, // scroll so that the element is at the top of the view
		behavior: "smooth" // smooth scroll
	});
};

// Graphs and Charts for advantages section

(function injectCharts() {
	// Comparison charts
	let comparisonChart = document.getElementById("comparisonChart"),
		comparisonData = {
			type: "doughnut",
			data: {
				labels: ["15 Min Hobnob Code", "15 Min 1080p Video"],
				datasets: [
					{
						label: "Size Comparison",
						data: [15, 1250],
						backgroundColor: ["#222437", "#2C50ED"]
					}
				]
			},
			options: {
				tooltips: {
					callbacks: {
						label: (tooltipItem, data) => {
							// Adding percentage to the tooltips.
							let dataLabel =
									" " + data.labels[tooltipItem.index],
								number = (
									data.datasets[tooltipItem.datasetIndex]
										.data[tooltipItem.index]
								);

							let value =
								" : " +
								number +
								` MB`;

							if (Chart.helpers.isArray(dataLabel)) {
								dataLabel = dataLabel.slice();
								dataLabel[0] += value;
							} else {
								dataLabel += value;
							}

							return dataLabel;
						}
					}
				}
			}
		};

	new Chart(comparisonChart, comparisonData);
})();
