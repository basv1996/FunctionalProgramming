// var myDataDiv = document.querySelector("#myData");
// const dataUrl = 'scripts/data.json'

// let eyeColorColumn = "Wat is je oogkleur?";
// let eyecolor = []


// function parseData() {
// 	return new Promise((resolve, reject) => {
// 		let dataSet = data;
// 		resolve(dataSet);
// 	}).then(data => {
// 		return data.map(obj => {
// 			Object.keys(obj).forEach(key => {
// 				 obj[key] = convertToString(obj[key]);
// 				 obj[key] = convertToLowerCase(obj[key]);
// 				 obj[key] = removeSpaces(obj[key]);
//                  obj[key] = removeStripe(obj[key]);
//                  obj[key] = checkIfEmpty(obj[key]);
// 			})
// 			return obj;
// 		})
// 	})
// 	.then(data => {
// 		return data.map(obj => {
// 			//obj[eyeColorColumn]
//             obj['Wat is je oogkleur?'] = convertToString(obj['Wat is je oogkleur?']);
// 			return obj;
// 		})
// 	}).catch(err => {
// 		console.log(err);
// 	})
// }



// function convertToString(string){
//     return string.toString();
// }

// function convertToLowerCase(string){
//     if(typeof string === 'string') {
// 		return string.toLowerCase();
// 	} else {
// 		return string;
// 	}
// }

// function removeSpaces(string){
//     return string.replace(/ /g, "");
// }

// function removeStripe(string){
//     return string.replace('-', '');
// }

// function checkIfEmpty(string) {
//     if(string.length < 1) {
// 		return "Geen antwoord";
// 	} else {
// 		return string
// 	}
//     }




//     parseData().then(cleanData => {
//         console.log('Opgeschoond man');
//         console.table(cleanData);  
//         console.log(cleanData);
//         console.log(typeof cleanData)  ;  
//         //console.log(data.eyeColorColumn);
//         //console.log(cleanData.filter())
//         //console.log("obj values: ", Object.values(data[1]))
//         //console.log("stringify: ",JSON.stringify(data[1].eyeColorColumn))
//         cleanData.map((item) => {
//             console.log(item[eyeColorColumn])
//             let li = document.createElement('p')
//             li.innerHTML = item[eyeColorColumn]
//             document.body.appendChild(li)
//         })
       
//     });

// fetch('https://pokeapi.co/api/v2/pokemon', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json'
// 	},
// 	body: JSON.stringify({
// 		name: 'bulbasaur'
// 	})
// }).then(res => {
// 	return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROOORR'))



// fetch('https://pokeapi.co/api/v2/pokemon')
// 	.then(res => {
// 		if(res.ok) {
// 			console.log('Succes')
// 		} else {
// 			console.log("no succes")
// 		}
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROOORR'))


// fetch('https://pokeapi.co/api/v2/pokemon', {
// 	// method: 'POST',
// 	// body: {
// 	// 	name: 'bulbasaur'
// 	// }
// }).then(res => {
// 	return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROOORR'))

// fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
// .then(results => results.json())
// .then(data => {
// 	// console.log(myObj)
// 	// console.log(typeof myObj)
// 	let div = document.querySelector('div')
// 	data.results.map(obj => {
// 	let p = document.createElement('p')
// 	p.textContent = obj['name']
// 	div.appendChild(p)
// 		console.log(obj['name'])
// 	})
// })

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
.then((result) => result.json())
.then((data) => {
	console.log(data);
		let div = document.querySelector('div')
		data.result.map(obj => {
			console.log('hello: ', obj.drinks)
		let p = document.createElement('p')
		p.textContent(obj.drinks['strDrink'])
		div.appendChild(p)
		})

})