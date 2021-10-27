// //later bekijken of het met json ingeladen kan worden -> met FS (read met node)

// let answers = data
// console.log("de antwoorden zijn", answers);
var myDataDiv = document.querySelector("#myData");

 let eyeColorColumn = "Wat is je oogkleur?";

let eyecolor = []
let text = "";

// let testje = fetch('scripts/data.json')
// .then(results => results.json())
// .then(data => data.forEach(function(item, index, array) {
//     eyecolor.push(item[eyeColorColumn]
//         .toString()
//         .toLowerCase()
//         .replace(/\ /g, "")
//         .replace('-', '')
//         );
//     myDataDiv.insertAdjacentHTML('afterend',  `<div>${eyecolor}</div>`)
    
// }))

function getResults() {
    return fetch('scripts/data.json')
.then(results => results.json())
.then(data => data.forEach(function(item, index, array) {
    eyecolor.push(item[eyeColorColumn]
        // .toString()
        // .toLowerCase()
        // .replace(/\ /g, "")
        // .replace('-', '')
        );
        //console.log("test: ", eyecolor)
    //myDataDiv.insertAdjacentHTML('afterend',  `<div>${eyecolor}</div>`)
    
}))



function makeItUppercase() 
{
    return eyecolor.charAt(0).toUpperCase() + eyecolor.slice(1);
}
}

eyeColor = getResults();
console.log("Dataset: ", eyecolor);

console.log(typeof eyecolor)

for (const property in eyecolor) {
    console.log(`${property}: ${object[property]}`);
  }

//myDataDiv.insertAdjacentHTML('afterend',  `<div>${eyecolor}</div>`)
// myDataDiv.innerHTML = 
eyecolor.forEach(element => console.log(element));

// let txt = "";
// for (let x in eyecolor) {
//   txt += eyecolor[x] + " ";
// };
// console.log("mijn txt is: ", txt)
myDataDiv.innerHTML = Object.values(eyecolor);
console.log("test111: ", Object.values(eyecolor))

// myDataDiv.innerHTML = eyecolor;


//console.log(eyecolor);


