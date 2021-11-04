function checkIfEmpty(str) { 
    if(typeof str === 'string' && //Als de string een type van string is en het antwoord is minder lang dan 1 character zet dan neer "niet ingevuld"
    str.length < 1 ){
        'Niet ingevuld'
    } else {
        str
    }
    return str
}

export default checkIfEmpty