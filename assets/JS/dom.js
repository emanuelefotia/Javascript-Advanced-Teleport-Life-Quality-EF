//creo la navbar di bootstrap
const nav = document.createElement('nav');
nav.classList.add('navbar', 'bg-transparent');
const cont = document.getElementById('cont');
cont.appendChild(nav);

//div principale
const mainDiv = document.createElement('div');
mainDiv.style.textAlign = 'center';
nav.appendChild(mainDiv);

//h1
const h1 = document.createElement('h1');
h1.classList.add('h1-responsive', 'font-weight-bold', 'text-center', 'my-4');
h1.style.fontWeight = 'bold';
mainDiv.appendChild(h1);
const testo = document.createTextNode('Life Quality');
h1.append(testo);

//div2
const div2 = document.createElement('div');
div2.style.textAlign = 'center';
mainDiv.appendChild(div2);

//h2
const h2 = document.createElement('h2');
h2.classList.add('h1-responsive', 'font-weight-bold', 'text-center', 'my-4');
h2.style.fontWeight = 'bold';
div2.appendChild(h2);
const testo2 = document.createTextNode('Enter the city and find out');
h2.append(testo2);

//div3
const div3 = document.createElement('div');
div3.classList.add('container-fluid');
div2.appendChild(div3);

//clear button
const btn = document.createElement('button');
btn.classList.add('btn', 'btn-outline-success');
btn.id = 'clear';
div3.appendChild(btn);
const testoBtn = document.createTextNode('Clear');
btn.append(testoBtn);

//input form
const input = document.createElement('input');
input.classList.add('form-control', 'me-2');
input.type = 'text';
input.placeholder = 'e.g: rome';
input.id = 'city';
div3.appendChild(input);

//search button
const btn2 = document.createElement('button');
btn2.classList.add('btn', 'btn-outline-success');
btn2.id = 'search';
div3.appendChild(btn2);
const testoBtn2 = document.createTextNode('Search');
btn2.append(testoBtn2);

//div risultati
const div4 = document.createElement('div');
div4.classList.add('container');
const body = document.getElementById('body');
body.appendChild(div4);

//row div
const div5 = document.createElement('div');
div5.classList.add('row');
div4.appendChild(div5);

//div sum
const divSum = document.createElement('div');
divSum.classList.add('col-sm');
div5.appendChild(divSum);

//p sum
const pSum = document.createElement('p');
pSum.classList.add('para');
pSum.id = 'sum';
divSum.appendChild(pSum);

//div cat
const divCat = document.createElement('div');
divCat.classList.add('col-sm', 'mb-3');
divCat.id = 'cat';
div5.appendChild(divCat);

//div score
const divScore = document.createElement('div');
divScore.classList.add('col-sm');
div5.appendChild(divScore);

//p score
const pScore = document.createElement('p');
pScore.classList.add('para');
pScore.id = 'score';
divScore.appendChild(pScore);
