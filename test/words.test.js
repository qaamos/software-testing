import chai from "chai";
import words from "../src/words.js";
const expect = chai.expect;

//Juho

describe("words", () => {
    it("should split a string into an array of its words", () => {
        expect(words("hi, i am truly hungry")).to.eql(["hi", "i", "am", "truly", "hungry"]);
    });

    it("shouldn't return any special characters like '&' as a word when not using a pattern", () => {
        expect(words("matti & teppo")).to.eql(["matti", "teppo"]);
    });

    it("returns correct words from a sentence if a pattern is given", () => {
        expect(words("Tämä on vettä. No niin ilmeisesti on." , /[^. ]+/g)).to.eql(
            ["Tämä", "on", "vettä", "No", "niin", "ilmeisesti", "on"]);
    });

    it("throws an exception with non-string input", () => {
        expect(() => words(9000)).to.throw();
    });
});