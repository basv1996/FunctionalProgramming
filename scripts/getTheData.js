//importeer alle modules
import convertToString from '../modules/convertToString.js'
import checkIfEmpty from '../modules/checkIfEmpty.js'
import convertToLowerCase from '../modules/convertToLowerCase.js'
import removeSpaces from '../modules/removeSpaces.js'
import removeStripe from '../modules/removeStripes.js'
import stringToHex from '../modules/stringToHex.js'


let eyeColorColumn = "Wat is je oogkleur?" //declareren van de oogkleur kolom

function parseData() {
        fetch('../data/data.json') // haal de data binnen (fetchen)
    	.then(results => results.json()) //geparsed naar een javascript object
        .then(data => {
    		return data.map(obj => { // We loopen hier over alle objecten in de array heen, obj staat voor ieder los object 
    			Object.keys(obj).forEach(key => { // loop door de data heen
                    //  Object.keys(obj) maakt een nieuwe array aan met alle keys, met forEach() loopen we daarover 
    				 obj[key] = convertToString(obj[key]) //zet het om naar een string
                     obj[key] = checkIfEmpty(obj[key]) //check of de entry leeg is
    				 obj[key] = convertToLowerCase(obj[key]) //converteer de strings naar kleine letters
    				 obj[key] = removeSpaces(obj[key]) //haal de spaties weg
                     obj[key] = removeStripe(obj[key]) //haal strepen tussen de antwoorden weg
    			})
    			return obj // Stuur elk obj aangepast terug naar de map()
    		})
    	})
    	.then(data => {
    		return data.map(obj => {
    			// Haal de waarde 'Wat is je oogkleur?'-key uit het object dat terugkomt uit de loop van data
                obj['Wat is je oogkleur?'] = convertToString(obj['Wat is je oogkleur?']);
    			return obj
    		})
    	})
        .then(cleanData => {
            // In deze .then() kunnen we vervolgens iets doen met de data, bijvoorbeeld renderen in een DOM   
            cleanData.map((item) => {
                stringToHex(cleanData, eyeColorColumn)
                let ptje = document.createElement('p')
                let divje = document.createElement('div')
                ptje.innerHTML = item[eyeColorColumn]
                document.querySelector('#myData').appendChild(divje)
                divje.appendChild(ptje)
                divje.style.backgroundColor = item[eyeColorColumn]
                return item
            })
           
        })
        .catch(err => {
    		console.log(err) // de .catch() vangt eventuele errors af die kunnen plaatsvinden
    	})
    }

        
    
export default parseData