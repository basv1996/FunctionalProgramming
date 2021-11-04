import colors from '../scripts/getColors.js'

function stringToHex(data, key){  //Deze functie heeft de data en key object als parameter mee
    data.map(obj => { //Loop door de data objecten heen
        let colorString = obj[key] //definieren van de variabele colorString
        colors.map(item => { //Loop door de array heen van colors en zet voor elke kleur gelijk aan "item"
            if (item.color === colorString) { //Kijk of de naam van de kleur overeen komt met de variable colorString
                return obj[key] = item.hex //Zo ja geef dan de hexcode terug
            } else {
                return {[key]: obj[key]} // Zo niet geef dan de kleurnaam terug
            }
        })
    })
}

export default stringToHex