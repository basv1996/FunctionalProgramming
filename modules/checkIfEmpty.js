function checkIfEmpty(str) {
    if(typeof str === 'string' && 
    str.length < 1 ){
        'Niet ingevuld'
    } else {
        str
    }
    return str
}

export default checkIfEmpty