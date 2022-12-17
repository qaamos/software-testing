import chai from "chai"
import filter from "../src/filter.js"

const products = [
       { 'name': 'potato', 'available': false },
       { 'name': 'television', 'available': true },
       { 'name': 'shovel', 'available': true }
]

const vegetables = [
        {'product': 'carrot', 'price': 5},
        {'product': 'tomato', 'price': 3}
]

describe("Filter", () => {
    it("returns an array", () =>{
        chai.expect(filter(products, ({ available }) => available)).to.be.a("array")
        chai.expect(filter(products, () => true)).to.be.a("array")
        chai.expect(filter(products, () => false)).to.be.a("array")
    });
    
    it("correctly filters truthy elements", () =>{
        chai.expect(filter(products, ({ available }) => available)).to.deep.equal(
            [{ name: 'television', available: true }, { name: 'shovel', available: true }])

        chai.expect(filter(products, ({ available }) => !available)).to.deep.equal(
            [{'name': 'potato', 'available': false}])

        chai.expect(filter(products, () => true)).to.deep.equal(products)

        chai.expect(filter(vegetables, () => true)).to.deep.equal(vegetables)

        chai.expect(filter(vegetables, ({ price }) => price==3 )).
            to.deep.equal([{'product': 'tomato', 'price': 3}])
    });

    it("throws an exception with erroneous input", () =>{
        chai.expect(() => filter("kissa", 5)).to.throw()
        chai.expect(() => filter(products, "not a function")).to.throw()
        chai.expect(() => filter(products)).to.throw()
    });

}) 
