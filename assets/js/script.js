const containerPrint = document.querySelector('.containerPrint');
const btnPrint = document.querySelector('#btnPrint');

const myContent = [
	'Primo contenuto',
	'Secondo contenuto',
	'Terzo contenuto',
	'Quarto contenuto',
];

// callback di print - viene chiamata dal forEach e ogni volta ritorna nel forEach
function generateElement(string) {
	const newParagraph = document.createElement('p');
	newParagraph.setAttribute('style', 'color: red;');
	newParagraph.textContent = string;
	containerPrint.appendChild(newParagraph);
}

// callback del click sul button: viene chiamata dall'evento e ritorna nell'ascolto dell'evento
function print() {
	myContent.forEach((content) => {
		generateElement(content);
	});
}

btnPrint.addEventListener('click', print);

const myProducts = [
	{
		name: 'Keyboard',
		category: 'Hardware',
	},
	{
		name: 'Mouse',
		category: 'Hardware',
	},
	{
		name: 'Photoshop',
		category: 'Software',
	},
	{
		name: 'Windows',
		category: 'Software',
	},
];

const choose = document.querySelector('#choose');
const productsList = document.querySelector('#productsList');

choose.addEventListener('change', function () {
	const filtered = myProducts.filter((product) => {
		return product.category === choose.value;
	});
	printProduct(filtered);
});

function printProduct(products) {
    productsList.textContent = '';
	products.forEach((product) => {
		const newLi = document.createElement('li');
		newLi.textContent = product.name;
		productsList.appendChild(newLi);
	});
}
