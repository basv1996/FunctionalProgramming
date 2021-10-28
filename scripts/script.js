var myDataDiv = document.querySelector("#myData");
const dataUrl = 'scripts/data.json'

let eyeColorColumn = "Wat is je oogkleur?";
let eyecolor = []


function parseData() {
	return new Promise((resolve, reject) => {
		let dataSet = data;
		resolve(dataSet);
	}).then(data => {
		return data.map(obj => {
			Object.keys(obj).forEach(key => {
				 obj[key] = convertToString(obj[key]);
				 obj[key] = convertToLowerCase(obj[key]);
				 obj[key] = removeSpaces(obj[key]);
                 obj[key] = removeStripe(obj[key]);
                 obj[key] = checkIfEmpty(obj[key]);
			})
			return obj;
		})
	})
	.then(data => {
		return data.map(obj => {
			obj[eyeColorColumn]
			return obj;
            console.log("hello");
		})
	}).catch(err => {
		console.log(err);
	})
}



function convertToString(string){
    return string.toString();
}

function convertToLowerCase(string){
    if(typeof string === 'string') {
		return string.toLowerCase();
	} else {
		return string;
	}
}

function removeSpaces(string){
    return string.replace(/ /g, "");
}

function removeStripe(string){
    return string.replace('-', '');
}

function checkIfEmpty(string) {
    if(string.length < 1) {
		return "Geen antwoord";
	} else {
		return string
	}
    }


    parseData().then(cleanData => {
        console.log('Opgeschoond man');
        console.table(cleanData);      
       
    });

