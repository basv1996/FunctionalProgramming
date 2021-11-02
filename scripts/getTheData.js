//importing the modules
import convertToString from '../modules/convertToString.js'
import checkIfEmpty from '../modules/checkIfEmpty.js'
import convertToLowerCase from '../modules/convertToLowerCase.js'
import removeSpaces from '../modules/removeSpaces.js'
import removeStripe from '../modules/removeStripes.js'
import stringToHex from '../modules/stringToHex.js'


const dataUrl = 'scripts/data.js'



function parseData() {
    	return new Promise((resolve, reject) => {
    		let dataSet = data;
    		resolve(dataSet);
    	}).then(data => {
    		return data.map(obj => {
    			Object.keys(obj).forEach(key => {
    				 obj[key] = convertToString(obj[key]);
                     obj[key] = checkIfEmpty(obj[key]);
    				 obj[key] = convertToLowerCase(obj[key]);
    				 obj[key] = removeSpaces(obj[key]);
                     obj[key] = removeStripe(obj[key]);
                   
    			})
    			return obj;
    		})
    	})
    	.then(data => {
    		return data.map(obj => {
    			//obj[eyeColorColumn]
                obj['Wat is je oogkleur?'] = convertToString(obj['Wat is je oogkleur?']);
    			return obj;
    		})
    	}).catch(err => {
    		console.log(err);
    	})
    }

        parseData().then(cleanData => {
        console.table(cleanData);  
        console.log(cleanData);
        console.log(typeof cleanData)  ;  
       
        cleanData.map((item) => {
            console.log(item[eyeColorColumn])
            let li = document.createElement('p')
            li.innerHTML = item[eyeColorColumn]
            document.body.appendChild(li)
        })
       
    })
    