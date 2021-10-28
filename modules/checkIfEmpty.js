function checkIfEmpty(data) {
    const cleanData = data.filter(item =>{
        if (item.eyeColorColumn === ""){
            item.eyeColorColumn = "null"
        }
        return item.eyeColorColumn
    })
}

export default checkIfEmpty;