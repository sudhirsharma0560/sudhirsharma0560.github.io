const selectElem = document.querySelector("select#select");

function makeNewOptionBox(data) {
	const title = data.title;
	if (typeof title != "undefined") {
		const optionBox = document.createElement("option");
		optionBox.innerHTML = title;
		selectElem.appendChild(optionBox);
	}
}

function manipulateData(data) {
	for (eachItem in data.countryitems[0]) {
		const singleData = data.countryitems[0][eachItem];

		makeNewOptionBox(singleData);

		selectElem.addEventListener("change", function (e) {
			if (e.target.value == singleData.title) {
				// I am pasting some code which stores data in variable of 'singleData' object
				let totalCases = singleData.total_cases;
				let totalRecovered = singleData.total_recovered;
				let totalUnresolved = singleData.total_unresolved;
				let totalDeaths = singleData.total_deaths;
				let totalNew_cases_today = singleData.total_new_cases_today;
				let totalNew_deaths_today = singleData.total_new_deaths_today;
				let totalActive_cases = singleData.total_active_cases;
				let totalSerious_cases = singleData.total_serious_cases;

				// I Am Creating A Variable Which Has HTML To Be Executed When We Change Data.

				// This Html Has a parent div which has cards for each data like for cases, deaths, new deaths
				//& Also Contains Bootstrap Styling I Have Inserted Those variables Which I Had Pasted Above
				let cardTemplate = `
				<div class="row justify-content-center">
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-brown">
						<h2 class="mb-2">Cases</h2>
						<p>${totalCases}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-green">
						<h2 class="mb-2">Recovered</h2>
						<p>${totalRecovered}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-gray">
						<h2 class="mb-2">Unresolved</h2>
						<p>${totalUnresolved}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-red">
						<h2 class="mb-2">Deaths</h2>
						<p>${totalDeaths}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-purple">
						<h2 class="mb-2">New Cases</h2>
						<p>${totalNew_cases_today}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-yellow">
						<h2 class="mb-2">New Deaths</h2>
						<p>${totalNew_deaths_today}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-blue">
						<h2 class="mb-2">Active Cases</h2>
						<p>${totalActive_cases}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-pink">
						<h2 class="mb-2">Serious</h2>
						<p>${totalSerious_cases}</p>
					</div>
				</div>
				
				
				`;

				const wrapper = document.querySelector(".wrapper");
				wrapper.innerHTML = cardTemplate;
			}
		});
	}
}

const fetchedData = fetch(
	"https://api.thevirustracker.com/free-api?countryTotals=ALL"
)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		manipulateData(data);
	});



	// In The last The Only Thing Left Is Colors