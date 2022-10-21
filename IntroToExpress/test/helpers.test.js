const {sum}=requiere('../helpers')


//describe - 
//set de pruebas unitarias sobre el archivo helpers
describe ('Helpers',() => {
    it('should correctly sum 2 numbers', () => {
        const result = sum(2,2);
        expect(result).toBe(4);
    })
})