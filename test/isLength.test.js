import chai from "chai"
import isLength from "../src/isLength.js"


describe("isLength", () => {
 it("returns a boolean value", () =>{
    chai.expect(isLength(12)).to.be.a("boolean")
    chai.expect(isLength("12")).to.be.a("boolean")
    chai.expect(isLength()).to.be.a("boolean")
 });

 it("returns true when given a valid length", ()=> {
    chai.expect(isLength(1)).to.equal(true)
    chai.expect(isLength(3456)).to.equal(true)
    chai.expect(isLength(0)).to.equal(true)
    chai.expect(isLength(Number.MAX_SAFE_INTEGER)).to.equal(true)
 });

 it("returns false when given an invalid value", () => {
    chai.expect(isLength(0.5)).to.equal(false)
    chai.expect(isLength(-1)).to.equal(false)
    chai.expect(isLength("2245")).to.equal(false)
    chai.expect(isLength([12])).to.equal(false)
    chai.expect(isLength(Number.NEGATIVE_INFINITY)).to.equal(false)
    chai.expect(isLength(Number.POSITIVE_INFINITY)).to.equal(false)
    chai.expect(isLength(Number.MIN_SAFE_INTEGER)).to.equal(false)
    chai.expect(isLength(Number.MAX_SAFE_INTEGER + 1)).to.equal(false)
 });

}) 
