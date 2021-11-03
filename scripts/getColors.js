let colors = [] // een lege colors array aanmaken

fetch('../data/colors.json') // het binnenhalen van de kleuren uit het json bestand
.then(res => res.json()) // dit returnt een promise dat resolbed naar een javascript object
.then(data => {
    return data.map(obj => { //loop door de objecten "colors" heen
        colors.push(obj) // zet de kleuren objecten in de array colors
    })
})

export default colors