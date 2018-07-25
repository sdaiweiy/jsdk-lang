import "mocha";
import {expect} from "chai";
import IObject from "../src/IObject";
import IFunction from "../src/IFunction";

describe("isDefined function", () => {
    it('basic', function () {
        let a;
        expect(IObject.isDefined(void (1))).to.be.false;
        expect(IObject.isDefined(a)).to.be.false;
        expect(IObject.isDefined(undefined)).to.be.false;
        expect(IObject.isDefined(null)).to.be.false;
        expect(IObject.isDefined([])).to.be.true;
        expect(IObject.isDefined("")).to.be.true;
        expect(IObject.isDefined(true)).to.be.true;
        expect(IObject.isDefined(false)).to.be.true;
        expect(IObject.isDefined(0)).to.be.true;
    });
});

describe("isUndefined function", () => {
    it('basic \n', function () {
        let a;
        expect(IObject.isUndefined(void (1))).to.be.true;
        expect(IObject.isUndefined(a)).to.be.true;
        expect(IObject.isUndefined(undefined)).to.be.true;
        expect(IObject.isUndefined(null)).to.be.true;
        expect(IObject.isUndefined([])).to.be.false;
        expect(IObject.isUndefined("")).to.be.false;
        expect(IObject.isUndefined(true)).to.be.false;
        expect(IObject.isUndefined(false)).to.be.false;
        expect(IObject.isUndefined(0)).to.be.false;
    });
});

describe("isObject function", () => {
    it('basic', function () {
        expect(IObject.isObject({})).to.be.true;
        expect(IObject.isObject(new Function())).to.be.true;
        expect(IObject.isObject([])).to.be.true;
        expect(IObject.isObject("test")).to.be.false;
        expect(IObject.isObject(1)).to.be.false;
        expect(IObject.isObject(false)).to.be.false;
        expect(IObject.isObject(null)).to.be.false;
        expect(IObject.isObject(void (1))).to.be.false;
    });
});

describe("isPlain function", () => {
    it('basic', function () {
        expect(IObject.isPlain({})).to.be.true;
        expect(IObject.isPlain({a:1})).to.be.false;
        expect(IObject.isPlain(new Function())).to.be.false;
        expect(IObject.isPlain([])).to.be.false;
        expect(IObject.isPlain("test")).to.be.false;
        expect(IObject.isPlain(1)).to.be.false;
        expect(IObject.isPlain(false)).to.be.false;
        expect(IObject.isPlain(null)).to.be.false;
        expect(IObject.isPlain(void (1))).to.be.false;
    });
});

describe("equals function", () => {
    // 基础类型测试
    it('basic', function () {
        expect(IObject.equals(null, null)).to.be.true;
        expect(IObject.equals(0, -0)).to.be.true;
        expect(IObject.equals(-0, 0)).to.be.true;
        expect(IObject.equals(null, void 0)).to.be.false;
        expect(IObject.equals(void 0, null)).to.be.false;
    });

    // 字符串类型
    it('String Type', function () {
        expect(IObject.equals('Curly', 'Curly')).to.be.true;
        expect(IObject.equals(new String('Curly'), new String('Curly'))).to.be.true;
        expect(IObject.equals(new String('Curly'), 'Curly')).to.be.true;
        expect(IObject.equals('Curly', new String('Curly'))).to.be.true;
        expect(IObject.equals('Curly', 'Larry')).to.be.false;
        expect(IObject.equals(new String('Curly'), new String('Larry'))).to.be.false;
    });

    //数值类型
    it('Number Type', function () {
        expect(IObject.equals(75, 75)).to.be.true;
        expect(IObject.equals(new Number(75), new Number(75))).to.be.true;
        expect(IObject.equals(75, new Number(75))).to.be.true;
        expect(IObject.equals(new Number(75), 75)).to.be.true;
        expect(IObject.equals(new Number(0), -0)).to.be.true;
        expect(IObject.equals(0, new Number(-0))).to.be.true;
        expect(IObject.equals(new Number(75), new Number(63))).to.be.false;
    });

    it('`NaN` Type', function () {
        expect(IObject.equals(NaN, NaN)).to.be.true;
        expect(IObject.equals(new Number(NaN), NaN)).to.be.true;
        expect(IObject.equals(61, NaN)).to.be.false;
        expect(IObject.equals(new Number(79), NaN)).to.be.false;
        expect(IObject.equals(Infinity, NaN)).to.be.false;
    });

    // 布尔类型
    it('boolean Type', function () {
        expect(IObject.equals(true, true)).to.be.true;
        expect(IObject.equals(new Boolean, new Boolean)).to.be.true;
        expect(IObject.equals(true, new Boolean(true))).to.be.true;
        expect(IObject.equals(new Boolean(true), true)).to.be.true;
        expect(IObject.equals(new Boolean(true), new Boolean)).to.be.false;
    });

    // 基础类型比较
    it('compare basic Type', function () {
        expect(IObject.equals(new Boolean(false), true)).to.be.false;
        expect(IObject.equals('75', 75)).to.be.false;
        expect(IObject.equals(new Number(63), new String(63))).to.be.false;
        expect(IObject.equals(75, '75')).to.be.false;
        expect(IObject.equals(0, '')).to.be.false;
        expect(IObject.equals(1, true)).to.be.false;
        expect(IObject.equals(new Boolean(false), new Number(0))).to.be.false;
        expect(IObject.equals(false, new String(''))).to.be.false;
        expect(IObject.equals(12564504e5, new Date(2009, 9, 25))).to.be.false;
    });

    // 日期.
    it('Date Type', function () {
        expect(IObject.equals(new Date(2009, 9, 25), new Date(2009, 9, 25))).to.be.true;
        expect(IObject.equals(new Date(2009, 9, 25), new Date(2009, 11, 13))).to.be.false;
        expect(IObject.equals(new Date('Curly'), new Date('Curly'))).to.be.false;
    });

    // 函数.
    it('Function Type', function () {
        // 函数.
        function First() {
            this.value = 1;
        }

        First.prototype.value = 1;

        function Second() {
            this.value = 1;
        }

        Second.prototype.value = 2;
        expect(IObject.equals(First, Second)).to.be.false;

        // Instances.
        expect(IObject.equals(new First, new First)).to.be.true;
        expect(IObject.equals(new First, new Second)).to.be.false;
        expect(IObject.equals({value: 1}, new First)).to.be.false;
        expect(IObject.equals({value: 2}, new Second)).to.be.false;
    });

    // 正则.
    it('Reg Type', function () {
        expect(IObject.equals(/(?:)/gim, /(?:)/gim)).to.be.true;
        expect(IObject.equals(/(?:)/gi, /(?:)/ig)).to.be.true;
        expect(IObject.equals(/(?:)/g, /(?:)/gi)).to.be.false;
        expect(IObject.equals(/Moe/gim, /Curly/gim)).to.be.false;
        expect(IObject.equals(/(?:)/gi, /(?:)/g)).to.be.false;
    });

    it('Array Type', function () {
        // 数组和对象比较
        expect(IObject.equals({}, {})).to.be.true;
        expect(IObject.equals([], [])).to.be.true;
        expect(IObject.equals([{}], [{}])).to.be.true;
        expect(IObject.equals({length: 0}, [])).to.be.false;
        expect(IObject.equals([], {length: 0})).to.be.false;
        expect(IObject.equals({}, [])).to.be.false;
        expect(IObject.equals([], {})).to.be.false;
        // 数组和基础类型的对象比较
        expect(IObject.equals([1, 'Larry', true], [1, 'Larry', true])).to.be.true;
        expect(IObject.equals([/Moe/g, new Date(2009, 9, 25)], [/Moe/g, new Date(2009, 9, 25)])).to.be.true;
        // 包含多重类型的数组之间的不比较
        let a = [new Number(47), false, 'Larry', /Moe/, new Date(2009, 11, 13), ['running', 'biking', new String('programming')], {a: 47}];
        let b = [new Number(47), false, 'Larry', /Moe/, new Date(2009, 11, 13), ['running', 'biking', new String('programming')], {a: 47}];
        expect(IObject.equals(a, b)).to.be.true;
        // Array elements and properties.
        expect(IObject.equals(a, b)).to.be.true;
        a.push('White Rocks');
        expect(IObject.equals(a, b)).to.be.false;
        a.push('East Boulder');
        b.push('Gunbarrel Ranch', 'Teller Farm');
        expect(IObject.equals(a, b)).to.be.false;
        // Sparse arrays.
        expect(IObject.equals(Array(3), Array(3))).to.be.true;
        expect(IObject.equals(Array(3), Array(6))).to.be.false;
        let sparse = [];
        sparse[1] = 5;
        expect(IObject.equals(sparse, [void 0, 5])).to.be.true;
    });

    it('Simple objects', function () {
        expect(IObject.equals({a: 'Curly', b: 1, c: true}, {a: 'Curly', b: 1, c: true})).to.be.true;
        expect(IObject.equals({a: /Curly/g, b: new Date(2009, 11, 13)}, {
            a: /Curly/g,
            b: new Date(2009, 11, 13)
        })).to.be.true;
        expect(IObject.equals({a: 63, b: 75}, {a: 61, b: 55})).to.be.false;
        expect(IObject.equals({a: 63, b: 75}, {a: 61, c: 55})).to.be.false;
        expect(IObject.equals({a: 1, b: 2}, {a: 1})).to.be.false;
        expect(IObject.equals({a: 1}, {a: 1, b: 2})).to.be.false;
        expect(IObject.equals({x: 1, y: void 0}, {x: 1, z: 2})).to.be.false;
    });

    it('Complex objects', function () {
        // `A` contains nested objects and arrays.
        let a = {
            name: new String('Moe Howard'),
            age: new Number(77),
            stooge: true,
            hobbies: ['acting'],
            film: {
                name: 'Sing a Song of Six Pants',
                release: new Date(1947, 9, 30),
                stars: [new String('Larry Fine'), 'Shemp Howard'],
                minutes: new Number(16),
                seconds: 54
            }
        };
        // `B` contains equivalent nested objects and arrays.
        let b = {
            name: new String('Moe Howard'),
            age: new Number(77),
            stooge: true,
            hobbies: ['acting'],
            film: {
                name: 'Sing a Song of Six Pants',
                release: new Date(1947, 9, 30),
                stars: [new String('Larry Fine'), 'Shemp Howard'],
                minutes: new Number(16),
                seconds: 54
            }
        };
        expect(IObject.equals(a, b)).to.be.true;
    });
});

describe("extend function", () => {
    it('Basic', function () {
        let result;
        expect(IObject.extend({}, {a: 'b'}).a).to.be.eq('b');
        expect(IObject.extend({a: 'x'}, {a: 'b'}).a).to.be.eq('b');
        expect(IObject.extend({x: 'x'}, {a: 'b'}).x).to.be.eq('x');
        result = IObject.extend({x: 'x'}, {a: 'a'}, {b: 'b'});
        expect(IObject.equals(result, ({x: 'x', a: 'a', b: 'b'}))).to.be.true;
        result = IObject.extend({x: 'x'}, {a: 'a', x: 2}, {a: 'b'});
        expect(IObject.equals(result, {x: 2, a: 'b'})).to.be.true;
        result = IObject.extend({}, {a: void 0, b: null});
        expect(IObject.keys(result)).to.be.eql(['a', 'b']);

        try {
            result = {};
            IObject.extend(result, null, void 0, {a: 1});
        } catch (e) { /* ignored */
        }

        expect(result.a).to.be.eq(1);

        expect(IObject.extend(null, {a: 1}).a).to.be.eq(1);
        expect(IObject.extend(void 0, {a: 1}).a).to.be.eq(1);
    });
});

describe("deepExtend function", () => {
    it('Basic', function () {
        let source = {a: 1, b: {c: 2, d: 3}};

        let result = IObject.deepExtend({}, source);
        expect(IObject.equals(result, source)).to.be.true;

        source.b.c = 4;
        expect(source.b.c).to.be.eq(4);
        expect(result.b.c).to.be.eq(2);
    });
});

describe("clone function", () => {
    it('Basic', function () {
        expect(IObject.equals(IObject.clone({}), {})).to.be.true;
        expect(IObject.equals(IObject.clone({a: 1}), {a: 1})).to.be.true;

        let source = {a: 1, b: {c: 2, d: 3}};
        let result = IObject.clone(source);
        expect(IObject.equals(result, source)).to.be.true;

        source.b.c = 4;
        expect(source.b.c).to.be.eq(4);
        expect(result.b.c).to.be.eq(2);
    });
});

describe("keys function", () => {
    it('Basic', function () {
        expect(IObject.keys({one: 1, two: 2})).to.be.eql(['one', 'two']);

        let a = [];
        a[1] = 0;
        expect(IObject.keys(a)).to.be.eql(['1']);

        // keys that may be missed if the implementation isn't careful
        let trouble = {
            constructor: Object,
            valueOf: IFunction.emptyFunc,
            hasOwnProperty: null,
            toString: 5,
            toLocaleString: void 0,
            propertyIsEnumerable: /a/,
            isPrototypeOf: this,
            __defineGetter__: Boolean,
            __defineSetter__: {},
            __lookupSetter__: false,
            __lookupGetter__: []
        };
        let troubleKeys = ['constructor', 'valueOf', 'hasOwnProperty', 'toString', 'toLocaleString', 'propertyIsEnumerable',
            'isPrototypeOf', '__defineGetter__', '__defineSetter__', '__lookupSetter__', '__lookupGetter__'].sort();
        expect(IObject.keys(trouble).sort()).to.be.eql(troubleKeys);
    });
});

describe("values function", () => {
    it('Basic', function () {
        expect(IObject.values({one: 1, two: 2})).to.be.eql([1, 2]);
        expect(IObject.values({one: 1, two: 2, length: 3})).to.be.eql([1, 2, 3]);
    });
});

describe("hasKey function", () => {
    it('basic', function () {
        let obj = {
            foo: 'bar', func: function () {
            }
        };
        expect(IObject.hasKey(obj, 'foo')).to.be.true;
        expect(IObject.hasKey(obj, 'baz')).to.be.false;
        expect(IObject.hasKey(obj, 'func')).to.be.true;
    });
});

describe("each function", () => {
    it('basic', function () {
        let n1 = 3.24;
        let str1 = 'str1';
        let aObject = {a: 1, b: n1, c: 0, d: 's1', e: str1, f: ''};
        let count = 0, rArray = [], rIndex = [];
        IObject.each(aObject, function (key, value, object) {
            rArray[count] = value;
            rIndex[count++] = key;
        });
        expect(rArray).to.be.eql([1, 3.24, 0, 's1', 'str1', '']);
        expect(rIndex).to.be.eql(["a", 'b', "c", 'd', 'e', 'f']);

        let aObject1 = {a: {"c": "a"}, 'b': {}, "c": {a: {c: {}}}, d: [3, '45'], e: [], f: [[["str"]], 5]};
        count = 0, rArray = [], rIndex = [];
        IObject.each(aObject1, function (key, value, object) {
            rArray[count] = value;
            rIndex[count++] = key;
        });
        expect(rArray).to.be.eql([{"c": "a"}, {}, {a: {c: {}}}, [3, '45'], [], [[["str"]], 5]]);
        expect(rIndex).to.be.eql(["a", 'b', "c", 'd', 'e', 'f']);
    });
});

describe("toJson function", () => {
    it('basic', function () {
        let obj = {
            a: 1,
            b: 'test',
            c: true,
            d: 3.12345,
            e: false,
            f: null,
            g: [1, 2, 3],
            h: {
                aa: 1,
                bb: 2
            }
        };

        // 输入为Json对象
        let s = IObject.toJson(obj);
        expect(s).to.be.eq("{\"a\":1,\"b\":\"test\",\"c\":true,\"d\":3.12345,\"e\":false,\"f\":null,\"g\":[1,2,3],\"h\":{\"aa\":1,\"bb\":2}}");

        let arraytest = [{
            location: 'beijing',
            company: 'baidu',
            money: 10.012,
            people: 10
        }, {
            location: 'shanghai',
            company: 'baidu',
            money: 10.51,
            people: 2
        }]; // 输入为Json数组
        s = IObject.toJson(arraytest);
        expect(s).to.be.eq("[{\"location\":\"beijing\",\"company\":\"baidu\",\"money\":10.012,\"people\":10},{\"location\":\"shanghai\",\"company\":\"baidu\",\"money\":10.51,\"people\":2}]");
    });
});

describe("parseJson function", () => {
    it('basic', function () {

        let obj = "{\"a\":1,\"b\":\"test\",\"c\":true,\"d\":3.12345,\"e\":false,\"f\":null,\"g\":[1,2,3],\"h\":{\"aa\":1,\"bb\":2}}";  //输入为Json对象
        let testobj = IObject.parseJson(obj);
        expect(testobj.a).to.eq(1);
        expect(testobj.b).to.eq("test");
        expect(testobj.c).to.be.true;
        expect(testobj.d).to.eq(3.12345);
        expect(testobj.e).to.be.false;
        expect(testobj.f).to.be.null;
        expect(testobj.g).to.be.eql([1, 2, 3]);
        expect(testobj.h).to.be.eql({aa: 1, bb: 2});

        let array = "[{\"location1\":\"beijing\",\"company\":\"baidu\",\"money\":10.012,\"people\":10},{\"location1\":\"shanghai\",\"company\":\"baidu\",\"money\":10.51,\"people\":2}]";//输入为Json数组
        let jsarr = IObject.parseJson(array);
        expect(jsarr[0].location1).to.eq("beijing");
        expect(jsarr[0].company).to.eq("baidu");
        expect(jsarr[0].money).to.eq(10.012);
        expect(jsarr[0].people).to.eq(10);
        expect(jsarr[1].location1).to.eq("shanghai");
        expect(jsarr[1].company).to.eq("baidu");
        expect(jsarr[1].money).to.eq(10.51);
        expect(jsarr[1].people).to.eq(2);

        let n = "3.14";  //输入为number
        let s = IObject.parseJson(n);
        expect(s).to.eq(3.14);

        n = "\"baidu Online\"";  //输入为string
        s = IObject.parseJson(n);
        expect(s).to.eq("baidu Online");

        n = "null";  //输入为null
        s = IObject.parseJson(n);
        expect(s).to.be.null;

        n = "undefined";  //输入为undefined
        s = IObject.parseJson(n);
        expect(s).to.be.null;

        n = "true";  //输入为boolean
        s = IObject.parseJson(n);
        expect(s).to.be.true;

        n = "false";  //输入为boolean
        expect(IObject.parseJson(n)).to.be.false;
    });
});