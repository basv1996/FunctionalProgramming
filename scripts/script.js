// //later bekijken of het met json ingeladen kan worden -> met FS (read met node)

// let answers = data
// console.log("de antwoorden zijn", answers);
var myDataDiv = document.querySelector("#myData");

 let eyeColorColumn = "Wat is je oogkleur?";

let eyecolor = []

let testje = fetch('scripts/data.json')
.then(results => results.json())
.then(data => data.forEach(function(item, index, array) {
    eyecolor.push(item[eyeColorColumn]
        .toString()
        .toLowerCase()
        .replace(/\ /g, "")
        .replace('-', '')
        //.fontcolor('blue')
        );
    myDataDiv.insertAdjacentHTML('afterend',  `<div>${eyecolor}</div>`)
    
}))



console.log(eyecolor);


