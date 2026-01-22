const { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3 } = require("./snacks.js")



//test("La funzione getInitials restituisce le iniziali di un nome completo.", () =>{
    //const result = getInitials("Riccardo Ottavi");
    //expect(result).toBe("RO");
//})


//test("La funzione createSlug restituisce una stringa in lowercase.", () =>{
    //const result = createSlug("JAVASCRIPT");
    //expect(result).toBe("javascript");
//})


//test("La funzione average calcola la media aritmetica di un array di numeri", () =>{
    //const result = average([1,4,7,12]);
    //expect(result).toBe(6);
//})



//test("La funzione createSlug2 sostituisce gli spazi con -.", () =>{
    //const result = createSlug2("Questo è un test");
    //expect(result).toBe("questo-e-un-test");
//})



//test("La funzione isPalindrome verifica se una stringa è un palindromo.", () =>{
    //const result = isPalindrome("anna");
    //expect(result).toBe(true);
//})




test("La funzione createSlug3 lancia un errore se il titolo è vuoto o non valido.", () =>{
    const validation = () => createSlug3("");
    expect(validation).toThrow();
})


