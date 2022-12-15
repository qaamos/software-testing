import chai from "chai"
import isArrayLike from "../src/isArrayLike.js"


describe("isArrayLike", () => {
 it("returns a boolean value", () =>{
    chai.expect(isArrayLike([1])).to.be.a("boolean")
    chai.expect(isArrayLike("kissa")).to.be.a("boolean")
    chai.expect(isArrayLike([1,2])).to.be.a("boolean")
    chai.expect(isArrayLike(Infinity)).to.be.a("boolean")
 });

 it("returns true on array-like input", () =>{
    chai.expect(isArrayLike([1,2,3])).to.equal(true)
    chai.expect(isArrayLike(["kissa","koira"])).to.equal(true)
    chai.expect(isArrayLike("kissa")).to.equal(true)
    chai.expect(isArrayLike({x: "x", y: "y", length: 2})).to.equal(true)
 });

 it("returns false on non-array-like input", ()=>{
    chai.expect(isArrayLike(Number.NEGATIVE_INFINITY)).to.equal(false)
    chai.expect(isArrayLike(Number.MAX_SAFE_INTEGER)).to.equal(false)
    chai.expect(isArrayLike(Function)).to.equal(false)
    chai.expect(isArrayLike(Number.toString)).to.equal(false)
    chai.expect(isArrayLike(null)).to.equal(false)
    chai.expect(isArrayLike(NaN)).to.equal(false)
    chai.expect(isArrayLike(1234)).to.equal(false)
    chai.expect(isArrayLike({x: "x", y: "y"})).to.equal(false)
    chai.expect(isArrayLike({x: "x", y: "y", length: -1})).to.equal(false)
 });

}) 
