import INumber from "../src/INumber";
import {expect} from "chai";
import "mocha";

describe("isFinite function", () => {
    it("basic", () => {
        expect(INumber.isFinite(void 0)).to.be.false;
        expect(INumber.isFinite(null)).to.be.false;
        expect(INumber.isFinite(NaN)).to.be.false;
        expect(INumber.isFinite(Infinity)).to.be.false;
        expect(INumber.isFinite(-Infinity)).to.be.false;
        //expect(INumber.isFinite("12")).to.be.true;
        //expect(INumber.isFinite('1a')).to.be.false;
        //expect(INumber.isFinite('')).to.be.false;
        //let obj = new Number(5);
        // expect(INumber.isFinite(obj)).to.be.true;
        expect(INumber.isFinite(0)).to.be.true;
        expect(INumber.isFinite(123)).to.be.true;
        expect(INumber.isFinite(-12.44)).to.be.true;
    });
});

describe("isNaN function", () => {
    it("basic", () => {
        expect(INumber.isNaN(void 0)).to.be.false;
        expect(INumber.isNaN(null)).to.be.false;
        expect(INumber.isNaN(0)).to.be.false;
        //expect(INumber.isNaN(new Number(0))).to.be.false;
        expect(INumber.isNaN(NaN)).to.be.true;
        //expect(INumber.isNaN(new Number(NaN))).to.be.true;
    });
});

describe("isNumber function", () => {
    it("basic", () => {
        expect(INumber.isNumber('string')).to.be.false;
        expect(INumber.isNumber(void 0)).to.be.false;
        expect(INumber.isNumber(3 * 4 - 7 / 10)).to.be.true;
        expect(INumber.isNumber(NaN)).to.be.true;
        expect(INumber.isNumber(Infinity)).to.be.true;
        expect(INumber.isNumber('1')).to.be.false;
    });
});

describe("max function", () => {
    it("basic", () => {
        expect(INumber.max(1, 2)).to.be.equal(2);
        expect(INumber.max(1, 1.3, 1.5)).to.be.equal(1.5);
        expect(INumber.max(4, 1, 2, 3, 4)).to.be.equal(4);
    });
});

describe("min function", () => {
    it("basic", () => {
        expect(INumber.min(1, 2)).to.be.equal(1);
        expect(INumber.min(1.8, 2.2, 1.5)).to.be.equal(1.5);
        expect(INumber.min(4, 1, 2, 3, 4)).to.be.equal(1);
    });
});

describe("parseFloat function", () => {
    it("basic", () => {
        expect(INumber.parseFloat("3.14")).to.be.equal(3.14);
        expect(INumber.parseFloat("314e-2")).to.be.equal(3.14);
        expect(INumber.parseFloat("0.0314E+2")).to.be.equal(3.14);
        expect(INumber.parseFloat("3.14more non-digit characters")).to.be.equal(3.14);
        expect(INumber.parseFloat("FF2")).to.be.NaN
    });
});

describe("parseFloat1 function", () => {
    it("basic", () => {
        expect(INumber.parseFloat1("FF2")).to.be.equal(0.0);
    });
});

describe("parseInt function", () => {
    it("basic", () => {
        expect(INumber.parseInt("015")).to.be.equal(15);
        expect(INumber.parseInt(15.99)).to.be.equal(15);

        expect(INumber.parseInt("0xF", 16)).to.be.equal(15);
        expect(INumber.parseInt("F", 16)).to.be.equal(15);
        expect(INumber.parseInt("17", 8)).to.be.equal(15);
        expect(INumber.parseInt("015", 10)).to.be.equal(15);
        expect(INumber.parseInt(15.99, 10)).to.be.equal(15);
        expect(INumber.parseInt("15,123", 10)).to.be.equal(15);
        expect(INumber.parseInt("FXX123", 16)).to.be.equal(15);
        expect(INumber.parseInt("1111", 2)).to.be.equal(15);
        expect(INumber.parseInt("15 * 3", 10)).to.be.equal(15);
        expect(INumber.parseInt("15e2", 10)).to.be.equal(15);
        expect(INumber.parseInt("15px", 10)).to.be.equal(15);
        expect(INumber.parseInt("12", 13)).to.be.equal(15);

        expect(INumber.parseInt("Hello", 8)).to.be.NaN;
        expect(INumber.parseInt("546", 2)).to.be.NaN;
    });
});

describe("parseInt1 function", () => {
    it("basic", () => {
        expect(INumber.parseInt1("Hello", 8)).to.be.equal(0);
        expect(INumber.parseInt1("546", 2)).to.be.equal(0);
    });
});

describe("randomInt function", () => {
    it("basic", () => {
        expect(INumber.randomInt(0, 0)).to.be.equal(0);
        expect(INumber.randomInt(0, 10) <= 10).to.be.true;
        let arr = [];
        for (let i = 0; i < 20; i++) {
            arr[i] = INumber.randomInt(0, 9);
            expect(arr[i] < 10).to.be.true;
        }
    });
});

describe("toFixed function", () => {
    it("basic", () => {
        let numObj = 12345.6789;
        expect(INumber.toFixed(numObj, 0)).to.be.equal('12346');
        expect(INumber.toFixed(numObj, 1)).to.be.equal('12345.7');
        expect(INumber.toFixed(numObj, 6)).to.be.equal('12345.678900');
        expect(INumber.toFixed(numObj, 6)).to.be.equal('12345.678900');
        expect(INumber.toFixed(1.23e+20, 2)).to.be.equal('123000000000000000000.00');
        expect(INumber.toFixed(1.23e-10, 2)).to.be.equal('1.23');
        expect(INumber.toFixed(2.34, 1)).to.be.equal('2.3');
        expect(INumber.toFixed(-2.34, 1)).to.be.equal('-2.3');
        expect(INumber.toFixed(-2.34, 1)).to.be.equal('-2.3');
    });
});

describe("toJson function", () => {
    it("basic", () => {
        let numObj = 12345.6789;
        expect(INumber.toJson(numObj)).to.be.equal(12345.6789);
    });
});

describe("toString function", () => {
    it("basic", () => {
        let numObj = 12345.6789;
        expect(INumber.toString(numObj)).to.be.equal("12345.6789");
    });
});

describe("valueOf function", () => {
    it("basic", () => {
        expect(INumber.valueOf(10)).to.be.equal(10);
        expect(INumber.valueOf(true)).to.be.equal(1);
        expect(INumber.valueOf(false)).to.be.equal(0);
        expect(INumber.valueOf(null)).to.be.equal(0);
        expect(INumber.valueOf(undefined)).to.be.NaN;
        expect(INumber.valueOf("10")).to.be.equal(10);
    });
});