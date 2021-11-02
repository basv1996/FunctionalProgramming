let colors = []

fetch('../data/colors.json')
.then(res => res.json())
.then(data => {
    return data.map(obj => {
        colors.push(obj)
    })
})

export default colors