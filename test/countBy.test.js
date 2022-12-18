import chai from "chai";
import countBy from "../src/countBy.js";
const expect = chai.expect;

// Juho

const shopping_cart = [
    {'item': 'tomato', 'supplier': 'Teuvo'},
    {'item': 'tomato', 'supplier': 'Matti'},
    {'item': 'tomato', 'supplier': 'Teuvo'},
    {'item': 'olive', 'supplier': 'Teuvo'},
    {'item': 'tomato', 'supplier': 'Teuvo'},
    {'item': 'olive', 'supplier': 'Matti'}
];

describe("countBy", () => {
    var result = {'Teuvo': 4, 'Matti': 2};
    it("reutrns correct number of appearences per value", () => {
        expect(countBy(shopping_cart, value => value.supplier)).to.equal(result);
        result = {'tomato': 4, 'olive': 2};
        expect(countBy(football_team, value => value.item)).to.equal(result);
    });
    
    it("throws an exception when value doesn't exist", () => {
        expect(() => countBy(shopping_cart, value => value.color)).to.eql({});
    });
});