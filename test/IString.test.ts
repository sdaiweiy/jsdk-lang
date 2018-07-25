import IString from "../src/IString";
import {expect} from "chai";
import "mocha";

describe("charAt function", () => {
    it("basic", () => {
        let str = "Hello world!";

        expect(IString.charAt(str, 0)).to.eq("H");
        expect(IString.charAt(str, 1)).to.eq("e");
        expect(IString.charAt(str, -2)).to.eq("");
    });
});

describe("contains function", () => {
    it("basic", () => {
        expect(IString.contains("Blue Whale", "Blue")).to.be.true;
        expect(IString.contains("Blue Whale", "Blute")).to.be.false;
        expect(IString.contains("Blue Whale", "")).to.be.true;
    });
});

describe("endWith function", () => {
    it("basic", () => {
        expect(IString.endWith(null, null)).to.be.true;
        expect(IString.endWith(null, "def")).to.be.false;
        expect(IString.endWith("abcdef", null)).to.be.false;
        expect(IString.endWith("abcdef", "def")).to.be.true;
        expect(IString.endWith("ABCDEF", "def")).to.be.false;
        expect(IString.endWith("ABCDEF", "cde")).to.be.false;
        expect(IString.endWith("ABCDEF", "")).to.be.true;
    });
});

describe("format function", () => {
    it("basic", () => {
        /* (<any>window).foo = "bar";
         expect(IString.format("{{foo}} none")).to.eql("bar none");*/

        let context = {bar: "foo"};
        expect(IString.format("{{bar}} foo", context)).to.eql("foo foo");

        let context1 = {bar: "foo", foo: "bar"};
        expect(IString.format("a {{bar}} is a {{foo}}", context1)).to.eql("a foo is a bar");
    });

    it("complex object", () => {
        var context = {
            a: {
                b: {
                    c: 'd'
                }
            }
        };
        expect(IString.format("{{a.b.c}} {{a.b.q}} {{a}} {{a...b...c}} {{aa.b}} {{a.bb.c}}", context)).to.eql("d undefined [object Object] d undefined undefined");
    });
});

describe("indexOf function", () => {
    it('basic', function () {
        expect(IString.indexOf("Blue Whale", "Blue")).to.eq(0);
        expect(IString.indexOf("Blue Whale", "Blute")).to.eq(-1);
        expect(IString.indexOf("Blue Whale", "Whale", 0)).to.eq(5);
        expect(IString.indexOf("Blue Whale", "Whale", 5)).to.eq(5);
        expect(IString.indexOf("Blue Whale", "", 9)).to.eq(9);
        expect(IString.indexOf("Blue Whale", "", 10)).to.eq(10);
        expect(IString.indexOf("Blue Whale", "", 11)).to.eq(10);
    });
});

describe("isBlank function", () => {
    it('basic', function () {
        expect(IString.isBlank(null)).to.be.true;
        expect(IString.isBlank("")).to.be.true;
        expect(IString.isBlank(" ")).to.be.true;
        expect(IString.isBlank("bob")).to.be.false;
        expect(IString.isBlank("  bob  ")).to.be.false;
    });
});

describe("isEmpty function", () => {
    it('basic', function () {
        expect(IString.isEmpty(null)).to.be.true;
        expect(IString.isEmpty("")).to.be.true;
        expect(IString.isEmpty(" ")).to.be.false;
        expect(IString.isEmpty("bob")).to.be.false;
        expect(IString.isEmpty("  bob  ")).to.be.false;
    });
});

describe("isNotBlank function", () => {
    it('basic', function () {
        expect(IString.isNotBlank(null)).to.be.false;
        expect(IString.isNotBlank("")).to.be.false;
        expect(IString.isNotBlank(" ")).to.be.false;
        expect(IString.isNotBlank("bob")).to.be.true;
        expect(IString.isNotBlank("  bob  ")).to.be.true;
    });
});

describe("isNotEmpty function", () => {
    it('basic', function () {
        expect(IString.isNotEmpty(null)).to.be.false;
        expect(IString.isNotEmpty("")).to.be.false;
        expect(IString.isNotEmpty(" ")).to.be.true;
        expect(IString.isNotEmpty("bob")).to.be.true;
        expect(IString.isNotEmpty("  bob  ")).to.be.true;
    });
});

describe("isNotNullOrEmpty function", () => {
    it('basic', function () {
        expect(IString.isNotNullOrEmpty("")).to.be.false;
        expect(IString.isNotNullOrEmpty(" ")).to.be.true;
        expect(IString.isNotNullOrEmpty(null)).to.be.false;
        expect(IString.isNotNullOrEmpty(void 0)).to.be.false;
    });

});

describe("isNullOrEmpty function", () => {
    it('basic', function () {
        expect(IString.isNullOrEmpty("")).to.be.true;
        expect(IString.isNullOrEmpty(" ")).to.be.false;
        expect(IString.isNullOrEmpty(null)).to.be.true;
        expect(IString.isNullOrEmpty(void 0)).to.be.true;
    });
});

describe("isString function", () => {
    it('basic \n', function () {
        expect(IString.isString("i am string")).to.be.true;
        expect(IString.isString(new String("i am string"))).to.be.true;
        expect(IString.isString(1)).to.be.false;
        expect(IString.isString(true)).to.be.false;
        expect(IString.isString({})).to.be.false;
        expect(IString.isString(new Function())).to.be.false;
        expect(IString.isString(null)).to.be.false;
        expect(IString.isString(void(0))).to.be.false;
    });
});

describe("lastIndexOf function", () => {
    it('basic', function () {
        expect(IString.lastIndexOf("canal", "a")).to.eq(3);
        expect(IString.lastIndexOf("canal", "a", 2)).to.eq(1);
        expect(IString.lastIndexOf("canal", "a", 0)).to.eq(-1);
        expect(IString.lastIndexOf("canal", "x")).to.eq(-1);
    });
});

describe("padLeft function", () => {
    it('basic', function () {
        expect(IString.padLeft("", 3)).to.eq("   ");
        expect(IString.padLeft("bat", 3)).to.eq("bat");
        expect(IString.padLeft("bat", 5)).to.eq("  bat");
        expect(IString.padLeft("bat", 1)).to.eq("bat");
        expect(IString.padLeft("bat", -1)).to.eq("bat");
        expect(IString.padLeft("", 3, "z")).to.eq("zzz");
        expect(IString.padLeft("bat", 3, "yz")).to.eq("bat");
        expect(IString.padLeft("bat", 5, "yz")).to.eq("yzbat");
        expect(IString.padLeft("bat", 8, "yz")).to.eq("yzyzybat");
        expect(IString.padLeft("bat", 1, "yz")).to.eq("bat");
        expect(IString.padLeft("bat", -1, "yz")).to.eq("bat");
        expect(IString.padLeft("bat", 5, null)).to.eq("  bat");
        expect(IString.padLeft("bat", 5, " ")).to.eq("  bat");
    });
});

describe("padRight function", () => {
    it('basic', function () {
        expect(IString.padRight("", 3)).to.eq("   ");
        expect(IString.padRight("bat", 3)).to.eq("bat");
        expect(IString.padRight("bat", 5)).to.eq("bat  ");
        expect(IString.padRight("bat", 1)).to.eq("bat");
        expect(IString.padRight("bat", -1)).to.eq("bat");
        expect(IString.padRight("", 3, "z")).to.eq("zzz");
        expect(IString.padRight("bat", 3, "yz")).to.eq("bat");
        expect(IString.padRight("bat", 5, "yz")).to.eq("batyz");
        expect(IString.padRight("bat", 8, "yz")).to.eq("batyzyzy");
        expect(IString.padRight("bat", 1, "yz")).to.eq("bat");
        expect(IString.padRight("bat", -1, "yz")).to.eq("bat");
        expect(IString.padRight("bat", 5, null)).to.eq("bat  ");
        expect(IString.padRight("bat", 5, "")).to.eq("bat  ");
    });
});

describe("replace function", () => {
    it('basic', function () {
        expect(IString.replace("", "", "zzz")).to.eq("zzz");
        expect(IString.replace("", /.*/, "zzz")).to.eq("zzz");
        expect(IString.replace("", /.+/, "zzz")).to.eq("");
        expect(IString.replace("abc", "", "ZZ")).to.eq("ZZabc");
        expect(IString.replace("abc", "b", "ZZ")).to.eq("aZZc");
        expect(IString.replace("abcabc", "b", "ZZ")).to.eq("aZZcabc");
        expect(IString.replace("<__>\n<__>", /<.*>/, "z")).to.eq("z\n<__>");
        expect(IString.replace("ABCabc123", /[a-z]/, "_")).to.eq("ABC_bc123");
        expect(IString.replace("ABCabc123abc", /[^A-Z0-9]+/, "_")).to.eq("ABC_123abc");
        expect(IString.replace("ABCabc123abc", /[^A-Z0-9]+/, "")).to.eq("ABC123abc");
        expect(IString.replace("Lorem ipsum  dolor   sit", /( +)([a-z]+)/, "_$2")).to.eq("Lorem_ipsum  dolor   sit");
    });
});

describe("replaceFirst function", () => {
    it('basic', function () {
        expect(IString.replaceFirst("", "", "zzz")).to.eq("zzz");
        expect(IString.replaceFirst("", /.*/, "zzz")).to.eq("zzz");
        expect(IString.replaceFirst("", /.+/, "zzz")).to.eq("");
        expect(IString.replaceFirst("abc", "", "ZZ")).to.eq("ZZabc");
        expect(IString.replaceFirst("abc", "b", "ZZ")).to.eq("aZZc");
        expect(IString.replaceFirst("abcabc", "b", "ZZ")).to.eq("aZZcabc");
        expect(IString.replaceFirst("<__>\n<__>", /<.*>/, "z")).to.eq("z\n<__>");
        expect(IString.replaceFirst("ABCabc123", /[a-z]/, "_")).to.eq("ABC_bc123");
        expect(IString.replaceFirst("ABCabc123abc", /[^A-Z0-9]+/, "_")).to.eq("ABC_123abc");
        expect(IString.replaceFirst("ABCabc123abc", /[^A-Z0-9]+/, "")).to.eq("ABC123abc");
        expect(IString.replaceFirst("Lorem ipsum  dolor   sit", /( +)([a-z]+)/, "_$2")).to.eq("Lorem_ipsum  dolor   sit");
    });
});

describe("replaceAll function", () => {
    it('basic', function () {
        expect(IString.replaceAll("aabbccddabcd", "a", "")).to.eq('bbccddbcd');
        expect(IString.replaceAll("aabbccddabcd", "a", "e")).to.eq('eebbccddebcd');
    });
});

//调用原生方法,不测了
describe("split function", () => {

});

describe("startWith function", () => {
    it('basic', function () {
        expect(IString.startWith(null, null)).to.be.true;
        expect(IString.startWith(null, "abc")).to.be.false;
        expect(IString.startWith("abcdef", null)).to.be.false;
        expect(IString.startWith("abcdef", "abc")).to.be.true;
        expect(IString.startWith("ABCDEF", "abc")).to.be.false;
    });
});

describe("stripHTML function", () => {
    it('basic', function () {
        expect(IString.stripHTML('abc')).to.eq('abc');
        expect(IString.stripHTML('abc<ab>')).to.eq('abc');
        expect(IString.stripHTML('<ab/>abc<ab>')).to.eq('abc');
        expect(IString.stripHTML('<ab/>abc<ab><ab><ab><ab>')).to.eq('abc');
        expect(IString.stripHTML('<AB/>abc<ab><AB><ab><AB>')).to.eq('abc');
        expect(IString.stripHTML('<AB/>abc<><AB>123<ab><AB>')).to.eq('abc<>123');
        expect(IString.stripHTML('<ab/>abc<ab/>')).to.eq('abc');
        expect(IString.stripHTML('<ab/><ab/>')).to.eq('');
        expect(IString.stripHTML('<!-- test -->'), '');
        expect(IString.stripHTML('<script type="text/javascript"><!--document.write("!"); //--></script>')).to.eq('');//style相同
        expect(IString.stripHTML('<!DOCTYPE html>')).to.eq('');
        expect(IString.stripHTML('   ')).not.to.eq('');
    });
});

describe("substr function", () => {
    it('basic', function () {
        let str = "abcdefghij";
        expect(IString.substr(str, 1, 2)).to.eq('bc');
        expect(IString.substr(str, -3, 2)).to.eq('hi');
        expect(IString.substr(str, -3)).to.eq('hij');
        expect(IString.substr(str, 1)).to.eq('bcdefghij');
        expect(IString.substr(str, -20, 2)).to.eq('ab');
        expect(IString.substr(str, 20, 2)).to.eq('');
    });
});

describe("substring function", () => {
    it('basic', function () {
        let anyString = "Mozilla";

        expect(IString.substring(anyString, 0, 3)).to.eq('Moz');
        expect(IString.substring(anyString, 3, 0)).to.eq('Moz');
        expect(IString.substring(anyString, 3, -3)).to.eq('Moz');
        expect(IString.substring(anyString, 3, NaN)).to.eq('Moz');
        expect(IString.substring(anyString, -2, 3)).to.eq('Moz');
        expect(IString.substring(anyString, NaN, 3)).to.eq('Moz');

        expect(IString.substring(anyString, 4, 7)).to.eq('lla');
        expect(IString.substring(anyString, 7, 4)).to.eq('lla');

        expect(IString.substring(anyString, 4, 4)).to.eq('');

        expect(IString.substring(anyString, 0, 6)).to.eq('Mozill');

        expect(IString.substring(anyString, 0, 7)).to.eq('Mozilla');
        expect(IString.substring(anyString, 0, 10)).to.eq('Mozilla');
    });
});

describe("toCamelCase function", () => {
    it('basic', function () {
        expect(IString.toCamelCase('i-like-cock')).to.eql('iLikeCock');
        expect(IString.toCamelCase('I-Like-cock')).to.eql('ILikeCock');
        expect(IString.toCamelCase('i--like--cock')).to.eql('i-Like-Cock');
        expect(IString.toCamelCase('I__Like__Cock')).to.eql('I_Like_Cock');
        expect(IString.toCamelCase('-like-cock')).to.eql('LikeCock');
        expect(IString.toCamelCase('_like_cock')).to.eql('LikeCock');
        expect(IString.toCamelCase('i_like_cock')).to.eql('iLikeCock');
        expect(IString.toCamelCase('I_Like_Cock')).to.eql('ILikeCock');
        expect(IString.toCamelCase('i-like_cock-oh-yeah_haha_haha')).to.eql('iLikeCockOhYeahHahaHaha');
        expect(IString.toCamelCase('I_Like_Cock-Oh-Yeah_Haha_Haha')).to.eql('ILikeCockOhYeahHahaHaha');
        expect(IString.toCamelCase('ilikecockohyeahhahahaha')).to.eql('ilikecockohyeahhahahaha');
        expect(IString.toCamelCase('ILikeCockOhYeahHahaHaha')).to.eql('ILikeCockOhYeahHahaHaha');
    });
});

describe("toJson function", () => {

});

describe("toLowerCase function", () => {
    it('basic', function () {
        expect(IString.toLowerCase('中文简体 zh-CN || zh-Hans')).to.eql('中文简体 zh-cn || zh-hans');
        expect(IString.toLowerCase("ALPHABET")).to.eql('alphabet');
    });
});

//原生方法,不测了
describe("toString function", () => {

});

describe("toUpperCase function", () => {
    it('basic', function () {
        expect(IString.toUpperCase("alphabet")).to.eql('ALPHABET');
    });
});

describe("trim function", () => {
    it('trim function test \n', function () {
        let sStr = "     半角空格tab键	 ";
        expect(IString.trim(sStr)).to.eql("半角空格tab键");

        sStr = "　　	  ";
        expect(IString.trim(sStr)).to.eql("");
    });
});

describe("trimLeft function", () => {
    it('basic', function () {
        let sStr = "     半角空格tab键	 ";
        expect(IString.trimLeft(sStr)).to.eql("半角空格tab键	 ");

        sStr = "　　	  ";
        expect(IString.trimLeft(sStr)).to.eql("");
    });
});

describe("trimRight function", () => {
    it('basic', function () {
        let sStr = "     半角空格tab键	 ";
        expect(IString.trimRight(sStr)).to.eql("     半角空格tab键");

        sStr = "　　	  ";
        expect(IString.trimRight(sStr)).to.eql("");
    });
});

describe("valueOf function", () => {
    it('basic', function () {
        expect(IString.valueOf("Blue Whale")).to.eql("Blue Whale");
        expect(IString.valueOf(1)).to.eql("1");
        expect(IString.valueOf(true)).to.eql("true");
        expect(IString.valueOf(false)).to.eql("false");
        expect(IString.valueOf(void 0)).to.eql("undefined");
        expect(IString.valueOf(null)).to.eql("null");
    });
});
