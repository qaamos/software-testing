import chai from "chai"
import keys from "../src/keys.js"


function Product(name, price, available) {
    this.name = name;
    this.price = price;
    this.available = available;
}

const potato =
{
    'name': 'potato',
    'price': 12,
    'available': false
}

const keyboard = new Product("keyboard", 3, true)

describe("Keys", () => {
    it("returns an array", () =>{
        chai.expect(keys(new Product)).to.be.a("array")
        chai.expect(keys(potato)).to.be.a("array")
    });

    it("returns the keys of an object", () =>{
        chai.expect(keys(new Product)).to.deep.equal(['name', 'price', 'available'])
        chai.expect(keys(potato)).to.deep.equal(['name', 'price', 'available'])
        chai.expect(keys(keyboard)).to.deep.equal(['name', 'price', 'available'])
        chai.expect(keys("money")).to.deep.equal(['0', '1', '2', '3', '4'])
    });

    it("returns empty array with erroneous input", ()=>{
        chai.expect(keys(Number.MAX_SAFE_INTEGER+1)).to.deep.equal([])
        chai.expect(keys(Number.NEGATIVE_INFINITY)).to.deep.equal([])
        chai.expect(keys(NaN)).to.deep.equal([])
        chai.expect(keys(1234)).to.deep.equal([])
        chai.expect(keys(Number.toString)).to.deep.equal([])
    })

}) 
