import sum from './sum.js';

//test
test("if both a and b are numbers", () =>{

    const result = sum(10,12);

    expect(result).toBe(22);

})

it("If both numbers are in string format", ()=>{
    const result = sum("12", "13");
    expect(result).toBe(25)
})