import chai from "chai";
import isDate from "../src/isDate.js";
const expect = chai.expect;

// Juho

describe("isDate", () => {
    it("returns true when objects type is date"), () => {
        var d = new Date("2022-12-01T12:24:00");
        expect(isDate(d)).to.be.true;
        d = new Date(1669897380);
        expect(isDate(new Date(1669897380))).to.be.true;
        expect(isDate(new Date(false))).to.be.true;      
    };

    it("returns false if non-date input is given", () => {
        expect(isDate('Mon April 23 2012')).to.be.false;
        expect(isDate(['I', 'am not', 'a date'])).to.be.false;
    });
});