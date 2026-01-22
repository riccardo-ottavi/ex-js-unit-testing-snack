function getInitials(fullName){
    const splitted = fullName.split(" ")
    const firstnameInit = splitted[0].slice(0,1) 
    const lastNameInit = splitted[1].slice(0,1) 
    return firstnameInit + lastNameInit
}

module.exports = {
    getInitials
}