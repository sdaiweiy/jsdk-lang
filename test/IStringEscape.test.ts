import "mocha";
import {expect} from "chai";
import IStringEscape from "../src/IStringEscape";

describe("escapeReg function", () => {

});

describe("escapeHtml function", () => {
    it("basic", () => {
        expect(IStringEscape.escapeHtml("<br>ccccc<p>aaaaa</p>")).to.be.equal("&lt;br&gt;ccccc&lt;p&gt;aaaaa&lt;/p&gt;");
    });
});

describe("unEscapeHtml function", () => {
    it("basic", () => {
        expect(IStringEscape.unEscapeHtml("&lt;br&gt;ccccc&lt;p&gt;aaaaa&lt;/p&gt;")).to.be.equal("<br>ccccc<p>aaaaa</p>");
    });
});

describe("escapeJavaScript function", () => {

});

describe("unEscapeJavaScript function", () => {

});