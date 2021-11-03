//importing the modules
import convertToString from '../modules/convertToString.js'
import checkIfEmpty from '../modules/checkIfEmpty.js'
import convertToLowerCase from '../modules/convertToLowerCase.js'
import removeSpaces from '../modules/removeSpaces.js'
import removeStripe from '../modules/removeStripes.js'
import stringToHex from '../modules/stringToHex.js'

const dataUrl = 'scripts/data.js'
let eyeColorColumn = "Wat is je oogkleur?"

function parseData() {
        fetch('../data/data.json') // haal de data binnen (fetchen)
    	.then(results => results.json()) //geparsed naar een javascript object
        .then(data => {
    		return data.map(obj => {
    			Object.keys(obj).forEach(key => { // loop door de data heen
    				 obj[key] = convertToString(obj[key])
                     obj[key] = checkIfEmpty(obj[key])
    				 obj[key] = convertToLowerCase(obj[key])
    				 obj[key] = removeSpaces(obj[key])
                     obj[key] = removeStripe(obj[key])
    			})
    			return obj // geef de gefilterde data terug
    		})
    	})
    	.then(data => {
    		return data.map(obj => {
    			//obj[eyeColorColumn]
                obj['Wat is je oogkleur?'] = convertToString(obj['Wat is je oogkleur?']);
    			return obj
    		})
    	})
        .then(cleanData => {
            console.table(cleanData)
            console.log(cleanData)
            //console.log(typeof cleanData)    
           
            cleanData.map((item) => {
                stringToHex(cleanData, eyeColorColumn)
                //console.log(item[eyeColorColumn])
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
    		console.log(err)
    	})
    }

        
    
export default parseData