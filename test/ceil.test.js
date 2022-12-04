import chai from "chai"
import ceil from "../src/ceil.js"


describe("Ceil", () => {
 it("returns the correct type of data", () =>{
    chai.expect(ceil(2.123)).to.be.a("number")
    chai.expect(ceil(1.1111, 2)).to.be.a("number")
    chai.expect(ceil(1.1111, -62)).to.be.a("number")
 });
 it("rounds up to next integer by default", () =>{
    chai.expect(ceil(3.0004)).to.equal(4)
 });
 it("rounds up to requested decimal precision", () =>{
    chai.expect(ceil(12.123456, 3)).to.equal(12.124)
 });
 it("rounds up to requested integer precision", ()=>{
    chai.expect(ceil(98765, -2)).to.equal(98800)
    chai.expect(ceil(123, -3)).to.equal(1000)
 });
 it("handles erroneous input gracefully", ()=>{
    chai.expect(ceil("kissa")).to.be.NaN
    chai.expect(ceil("kissa", 12)).to.be.NaN
    chai.expect(ceil()).to.be.NaN
    chai.expect(ceil(123, "kissa")).to.equal(123)
 });
}) 
