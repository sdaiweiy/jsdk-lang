import IFunction from "../src/IFunction";
import {expect} from "chai";
import "mocha";

describe("currying function", () => {

});

describe("delay function", () => {
    let delayed = false;

    it("basic", () => {
        IFunction.delay(function () {
            delayed = true;
        }, 100);

        setTimeout(function () {
            expect(delayed).to.be.false;
        }, 50);

        setTimeout(function () {
            expect(delayed).to.be.true;
        }, 250);
    });

});

describe("emptyFunc function", () => {
    it("basic", () => {
        expect(IFunction.emptyFunc()).to.be(void 0);
    });
});

describe("isFunction function", () => {
    it("basic", () => {
        expect(IFunction.isFunction(void 0)).to.be.false;
        expect(IFunction.isFunction([1, 2, 3])).to.be.false;
        expect(IFunction.isFunction('moe')).to.be.false;
        expect(IFunction.isFunction(IFunction.isFunction)).to.be.true;
        expect(IFunction.isFunction(function () {
        })).to.be.true;

        let nodelist = typeof document != 'undefined' && document.childNodes;
        if (nodelist) {
            expect(IFunction.isFunction(nodelist)).to.be.false;
        }
    });
});

describe("bind function", () => {

});

describe("throttle function", () => {

});