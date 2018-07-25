import "mocha";
import {expect} from "chai";
import IStringEscape from "../src/IStringEscape";

describe("escapeReg function", () => {
    it('basic', function () {
        let strin = ".*+?^=!:${}()|[]/\\";
        let strout = "\.\*\+\?\^\=\!\:\$\{\}\(\)\|\[\]\/\\";
        expect(strin).to.eql(strout);

        strin = "[escape]|.{reg}";
        strout = "\[escape\]\|\.\{reg\}";
        expect(strin).to.eql(strout);

        strin = "(中文)^China?.";
        strout = "\(中文\)\^China\?\.";
        expect(strin).to.eql(strout);

        //带减号-的时候不需要转义减号
        strin = "[^w-z]+?(匹)配$";
        strout = "\[\^w-z\]\+\?\(匹\)配\$";
        expect(strin).to.eql(strout);
    });
});

describe("escapeHtml function", () => {
    it("basic", () => {
        expect(IStringEscape.escapeHtml('<>"&')).to.eq("&lt;&gt;&quot;&amp;");
        expect(IStringEscape.escapeHtml('<input type="text" value="data"/>')).to.eq('&lt;input type=&quot;text&quot; value=&quot;data&quot;/&gt;');
        expect(IStringEscape.escapeHtml('&amp;&<<<>>')).to.eq('&amp;amp;&amp;&lt;&lt;&lt;&gt;&gt;');
    });
});

describe("unEscapeHtml function", () => {
    it("basic", () => {
        expect(IStringEscape.unEscapeHtml('&lt;&gt;&quot;&amp;')).to.eq('<>"&');
        expect(IStringEscape.unEscapeHtml('&lt;input type=&quot;text&quot; value=&quot;data&quot;/&gt;')).to.eq('<input type="text" value="data"/>');
        expect(IStringEscape.unEscapeHtml('&amp;amp;&amp;&lt;&lt;&lt;&gt;&gt;')).to.eq('&amp;&<<<>>');
        expect(IStringEscape.unEscapeHtml('&#12345;')).to.eq('〹');
        expect(IStringEscape.unEscapeHtml('hi,all&#22909;&#30340;,&#36825;&#20010;javascript&#19981;&#38169;')).to.eq('hi,all好的,这个javascript不错');
    });
});

describe("escapeJavaScript function", () => {

});

describe("unEscapeJavaScript function", () => {

});