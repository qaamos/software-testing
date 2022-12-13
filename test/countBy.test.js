import chai from "chai";
import countBy from "../src/countBy.js";
const expect = chai.expect;

// Juho

const football_team = [
    {'player': 'Messi', 'position': 'forward'},
    {'player': 'Ronaldo', 'position': 'forward'},
    {'player': 'Modric', 'position': 'midfield'},
    {'player': 'Guimaraes', 'position': 'midfield'},
    {'player': 'Kane', 'position': 'forward'},
    {'player': 'Simon', 'position': 'goalkeeper'}
];

describe("countBy", () => {
    const result = {'forward': 3, 'midfield': 2, 'goalkeeper': 1};
    it("reutrns correct number of appearences per value", () => {
        expect(countBy(football_team, value => value.position)).to.equal(result);
    });

    it("throws an exception when value doesn't exist", () => {
        expect(countBy(football_team, value => value.shoebrand)).to.throw(new Error());
    });
});