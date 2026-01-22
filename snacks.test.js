const { getInitials } = require("./snacks.js")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () =>{
    const result = getInitials("Riccardo Ottavi");
    expect(result).toBe("RO");
})