const { getInitials, createSlug } = require("./snacks.js")



//test("La funzione getInitials restituisce le iniziali di un nome completo.", () =>{
    //const result = getInitials("Riccardo Ottavi");
    //expect(result).toBe("RO");
//})


test("La funzione createSlug restituisce una stringa in lowercase.", () =>{
    const result = createSlug("JAVASCRIPT");
    expect(result).toBe("javascript");
})