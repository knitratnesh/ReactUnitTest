import { render, screen } from "@testing-library/react"
import getData, * as service from "./service/service"
// import getData from "./service/service";
// import getData from "./service/service.js"
import TestComponent from "./TestComponent"

const user = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}]

jest.mock('./service/service', () => () => Promise.resolve(user))


describe("Testing Component", () => {
    it("Testing Test Component", () => {


        //   const {debug} =  render(<TestComponent/>)
        //debug()
        render(<TestComponent />)
        const text = screen.queryByText("Hi how are you?").innerHTML
        expect(text).toBe("Hi how are you?")
    });
})


//calling fetch method directly
describe("Testing Component", () => {
    it("Testing Test Component", async () => {
        const data = await getData();
        const itemCount = data.length;
        // console.log(data)
        expect(itemCount).toBe(1)
    })
})

//Mocking data from hardcoded data

describe("Testing Component", () => {
    it("Testing Test Component", async () => {

        const data = await getData();
        const { debug } = render(<TestComponent user={data} />)
        //debug()
        const text = screen.queryByText("Romaguera-Crona").innerHTML;
        expect(text).toBe("Romaguera-Crona")
    })
})