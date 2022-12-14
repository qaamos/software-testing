import chai from "chai";
import add from "../src/add.js";
const expect = chai.expect;

// Juho

describe("Add", () => {
    it("adds two integers", () => {
        expect(add(12,24)).to.equal(36);
    });
    it("adds two floats", () => {
        expect(add(4.5, 6.2)).to.equal(10.7);
    });

    it("adds negative numbers", () => {
        expect(add(10,-2)).to.equal(8);
    });
    it("should return a number", () => {
        expect(add(12,12)).to.be.a('number');
    });
    it("throws exception with NaN input", () => {
        expect(() => add("football", 2022)).to.throw();
    });
});