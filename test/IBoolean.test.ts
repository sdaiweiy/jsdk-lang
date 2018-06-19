import IBoolean from "../src/IBoolean";
import {expect} from "chai";
import "mocha";

describe("isBoolean function", () => {

    it("basic", () => {
        expect(IBoolean.isBoolean({})).to.be.false;
        expect(IBoolean.isBoolean(new Function())).to.be.false;
        expect(IBoolean.isBoolean([])).to.be.false;
        expect(IBoolean.isBoolean("test")).to.be.false;
        expect(IBoolean.isBoolean(1)).to.be.false;
        expect(IBoolean.isBoolean(null)).to.be.false;
        expect(IBoolean.isBoolean(void (1))).to.be.false;
        expect(IBoolean.isBoolean(false)).to.be.true;
        expect(IBoolean.isBoolean(true)).to.be.true;
    });

});

describe("isFalse function", () => {

    it("basic", () => {
        expect(IBoolean.isFalse(null)).to.be.true;
        expect(IBoolean.isFalse("")).to.be.true;
        expect(IBoolean.isFalse(void 0)).to.be.true;
        expect(IBoolean.isFalse({})).to.be.false;
        expect(IBoolean.isFalse(new Function())).to.be.false;
        expect(IBoolean.isFalse([])).to.be.false;
        expect(IBoolean.isFalse(1)).to.be.false;
    });

});

describe("isTrue function", () => {

    it("basic", () => {
        expect(IBoolean.isTrue(null)).to.be.false;
        expect(IBoolean.isTrue("")).to.be.false;
        expect(IBoolean.isTrue(void 0)).to.be.false;
        expect(IBoolean.isTrue({})).to.be.true;
        expect(IBoolean.isTrue(new Function())).to.be.true;
        expect(IBoolean.isTrue([])).to.be.true;
        expect(IBoolean.isTrue(1)).to.be.true;
    });

});

describe("valueOf function", () => {

    it("basic", () => {
        expect(IBoolean.valueOf({})).to.be.true;
        expect(IBoolean.valueOf(new Function())).to.be.true;
        expect(IBoolean.valueOf([])).to.be.true;
        expect(IBoolean.valueOf("test")).to.be.true;
        expect(IBoolean.valueOf(1)).to.be.true;
        expect(IBoolean.valueOf(false)).to.be.false;
        expect(IBoolean.valueOf(true)).to.be.true;
        expect(IBoolean.valueOf(null)).to.be.false;
        expect(IBoolean.valueOf(void (1))).to.be.false;
    });
});

describe("toJson function", () => {
    it("basic", () => {
        expect(IBoolean.toJson(false)).to.be.false;
        expect(IBoolean.toJson(true)).to.be.true;
    });
});

describe("toString function", () => {

    it("basic", () => {
        expect(IBoolean.toString(false)).to.be.equal("false");
        expect(IBoolean.toString(true)).to.be.equal("true");
    });

});