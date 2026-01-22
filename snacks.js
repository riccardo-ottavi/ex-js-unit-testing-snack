function getInitials(fullName){
    const splitted = fullName.split(" ")
    const firstnameInit = splitted[0].slice(0,1) 
    const lastNameInit = splitted[1].slice(0,1) 
    return firstnameInit + lastNameInit
}


function createSlug(str){
    return str.toLowerCase()
}

function average(arr){
    const sum = arr.reduce((acc, value) =>
        acc + value,
        0
    )
    const average = sum / arr.length
    return average
}

module.exports = {
    getInitials,
    createSlug,
    average
}