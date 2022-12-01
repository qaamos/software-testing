import chai from "chai"
import ceil from "../src/ceil.js"


describe("Ceil", () => {
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
}) 
