//dichiaro tutti gli elementi da intercettare
const city = document.getElementById('city');
const search = document.getElementById('search');
const clear = document.getElementById('clear');
const sum = document.getElementById('sum');
const categories = document.getElementById('cat');
const score = document.getElementById('score');

//apro la funzione per mandare la richiesta alle API di teleport

const api = async function(city) {
	const request = await axios
		.get('https://api.teleport.org/api/urban_areas/slug:' + city + '/scores/')
		.then(response => response);
	console.log(request);

	//descrizione città
	const summary = request.data.summary;
	console.log(summary);
	sum.insertAdjacentHTML('afterbegin', summary);

	//score di ogni categoria della città
	const sectionCategories = request.data.categories.forEach(element => {
		let section = document.createElement('section');
		section.classList.add('section_categories');
		categories.appendChild(section);
		let create = document.createElement('div');
		create.classList.add('categories');
		section.appendChild(create);

		const span = document.createElement('span');
		const title = span.append(element.name);
		create.append(span);
		const change = element.score_out_of_10.toFixed(1) * 10;
		console.log(change);

		const progressContainer = document.createElement('div');
		const bar = document.createElement('div');

		create.appendChild(progressContainer);
		const progressBar = progressContainer.appendChild(bar);
		bar.classList.add('progress-bar', 'progress-bar-striped', 'bg-success', 'progress-bar-animated');
		bar.innerHTML = `${change}/100`;
		progressContainer.classList.add('progress');
		progressBar.style.width = `${change}%`;
	});

	//score generale della città
	const telescore = request.data.teleport_city_score;
	console.log(telescore);
	score.insertAdjacentHTML('afterbegin', '<b>Teleport city score : </b>' + telescore);
};

//manda a schermo i risultati della richiesta fatta alle api di teleport
search.addEventListener('click', async function() {
	sum.innerHTML = ' ';
	categories.innerHTML = ' ';
	score.innerHTML = ' ';
	api(city.value);
});

//ripulisce il form e refresha la pagina
clear.addEventListener('click', function() {
	location.reload();
	city.value = '';
});
