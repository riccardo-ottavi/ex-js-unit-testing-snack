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

function createSlug2(str){
    const normalized = str.toLowerCase().replace("è", "e")
    const result = normalized.replace(/ /g, "-")
    
    return result
}

function isPalindrome(str){
    let isStrPalindrome = true
    for(let i = 0; i < str.length/ 2; i++){
        if(str[i] !== str[str.length-1-i]){
            isStrPalindrome = false
        }
    }
    return isStrPalindrome
}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome
}