import colors from '../scripts/getColors.js'

function stringToHex(data, key){
    data.map(obj => {
        let colorString = obj[key]
        colors.map(item => {
            if (item.color === colorString) {
                return obj[key] = item.hex
            } else {
                return {[key]: obj[key]}
            }
        })
    })
}

export default stringToHex