import chai from "chai"
import ceil from "../src/ceil.js"


describe("Ceil", () => {
 it("rounds up to next integer", () =>{
     chai.expect(ceil(3.0004)).to.equal(4)
 });
}) 
