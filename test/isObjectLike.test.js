import chai from "chai";
import isObjectLike from "../src/isObjectLike.js";
const expect = chai.expect;

// Juho 

describe("isObjectLike", () => {
    it("should return true if type of input is an object", () => {
        expect(isObjectLike({hello: "i'm", hungry: "!"})).to.be.true;
    });
    it("should return true with a list as an input", () => {
        expect(isObjectLike(["hi", "hungry!"])).to.be.true;
    });
    it("should return false if input is null", () => {
        expect(isObjectLike(null)).to.be.false;
    });
    it("should return false if input is a function", () => {
        expect(isObjectLike(isObjectLike)).to.be.false;
    });
});
