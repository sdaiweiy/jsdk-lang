import IArray from "../src/IArray";
import {expect} from "chai";
import "mocha";

describe("add function", () => {
    let myFish = ["angel"];

    it("add item not index", () => {
        IArray.add(myFish, "clown");
        expect(myFish).to.eql(["angel", "clown"]);
    });

    it('add item with index', function () {
        IArray.add(myFish, "mandarin", 1);
        expect(myFish).to.eql(["angel", "mandarin", "clown"]);
        IArray.add(myFish, "surgeon", 5);
        expect(myFish).to.eql(["angel", "mandarin", "clown", "surgeon"]);
    });
});

describe("addAll function", () => {
    let alpha = ['a', 'b'];
    let numeric = ['c', 'd'];

    it('add items', function () {
        let result = IArray.addAll(alpha, numeric);
        expect(result).to.eql(['a', 'b', 'c', 'd']);
        expect(alpha).to.eql(['a', 'b', 'c', 'd']);
    });
});

describe("clear function", () => {
    let alpha = ['a', 'b'];

    it('clear items', function () {
        expect(alpha.length).to.eq(2);
        IArray.clear(alpha);
        expect(alpha.length).to.eq(0);
    });
});

describe("clone function", () => {
    let alpha = ['a', 'b', 1, true, void 0];

    it('basic', function () {
        let copyAlpha = IArray.clone(alpha);

        IArray.each(copyAlpha, function (index, item) {
            expect(copyAlpha[index]).to.equal(alpha[index]);
        });

        IArray.remove(alpha, 1);
        expect(alpha.length).to.equal(4);
        expect(copyAlpha.length).to.equal(5);
    });

});

describe("contains function", () => {
    let alpha = ['a', 'b', 1, true, NaN, void 0];

    it('alpha has every item', function () {
        IArray.each(alpha, function (index, item) {
            expect(IArray.contains(alpha, item)).to.be.true;
        });
    });

    it('alpha exclude 123 ', function () {
        expect(IArray.contains(alpha, '123')).to.be.false;
    });
});

describe("each function", () => {
    let alpha = ['a', 'b', 1, true, void 0];

    it('alpha has every item', function () {
        IArray.each(alpha, function (index, item) {
            expect(alpha[index] == item).to.be.true;
        });
    });
});

describe("filter function", () => {
    let alpha = ['a', 'b', 1, true, '2'];

    it('filter string type item', function () {
        let result = IArray.filter(alpha, function (index, item) {
            return Object.prototype.toString.call(item) === '[object String]';
        });

        expect(result).to.deep.equal(['a', 'b', '2']);
    });
});

describe("indexOutOfBounds function", () => {
    let myFish = ["angel", "clown", "mandarin", "surgeon"];

    it('basic', function () {
        expect(IArray.indexOutOfBounds(myFish, -1)).to.be.true;
        expect(IArray.indexOutOfBounds(myFish, 3)).to.be.false;
        expect(IArray.indexOutOfBounds(myFish, 5)).to.be.true;
    });
});

describe("isArray function", () => {

    it('basic', function () {
        // 下面的函数调用都返回 true
        expect(IArray.isArray([])).to.be.true;
        expect(IArray.isArray([1])).to.be.true;
        expect(IArray.isArray(new Array())).to.be.true;
        expect(IArray.isArray(Array.prototype)).to.be.true;

        // 下面的函数调用都返回 false
        expect(IArray.isArray({})).to.be.false;
        expect(IArray.isArray(null)).to.be.false;
        expect(IArray.isArray(undefined)).to.be.false;
        expect(IArray.isArray(17)).to.be.false;
        expect(IArray.isArray('Array')).to.be.false;
        expect(IArray.isArray(true)).to.be.false;
        expect(IArray.isArray(false)).to.be.false;
        expect(IArray.isArray({__proto__: Array.prototype})).to.be.false;
    });
});

describe("isNullOrEmpty function", () => {
    let arrays;
    it('basic', function () {
        expect(IArray.isNullOrEmpty(arrays)).to.be.true;
        expect(IArray.isNullOrEmpty([])).to.be.true;
        expect(IArray.isNullOrEmpty([1, 2, 3])).to.be.false;
    });
});

describe("isNotNullOrEmpty function", () => {
    let arrays;
    it('basic', function () {
        expect(IArray.isNotNullOrEmpty(arrays)).to.be.false;
        expect(IArray.isNotNullOrEmpty([])).to.be.false;
        expect(IArray.isNotNullOrEmpty([1, 2, 3])).to.be.true;
    });
});

describe("indexOf function", () => {
    it('basic', function () {
        let numbers = [1, 2, 3];
        expect(IArray.indexOf(numbers, 2)).to.equal(1);
    });

    it('all type test', function () {
        IArray.each([null, void 0, [], false], function (index, val, array) {
            expect(IArray.indexOf(array, val)).to.equal(index);
        });
    });

    it('start index test', function () {
        let num = 30;
        let numbers = [10, 20, 30, 40, 50];
        expect(IArray.indexOf(numbers, num)).to.equal(2);
        expect(IArray.indexOf(numbers, num, 3)).to.equal(-1);
    });

    it('object equals', function () {
        let objects = [{a: 1, b: 2}, {a: 2, b: 4, c: {d: 1, e: 2}}];
        expect(IArray.indexOf(objects, {a: 1, b: 2})).to.equal(0);
        expect(IArray.indexOf(objects, {a: 2, b: 3})).to.equal(-1);
        expect(IArray.indexOf(objects, {a: 2, b: 4, c: {d: 1, e: 2}})).to.equal(1);
    });
});

describe("join function", () => {
    let weather = ['Wind', 'Rain', 'Fire'];

    it('not separator', function () {
        expect(IArray.join(weather)).to.eq("Wind,Rain,Fire");
    });

    it('has separator', function () {
        expect(IArray.join(weather, ",")).to.eq("Wind,Rain,Fire");
        expect(IArray.join(weather, " + ")).to.eq("Wind + Rain + Fire");
        expect(IArray.join(weather, "")).to.eq("WindRainFire");
    });

});

describe("lastIndexOf function", () => {
    it('basic', function () {
        let numbers = [1, 0, 1];
        expect(IArray.lastIndexOf(numbers, 1)).to.equal(2);

        let array = [1, 2, 3, 1, 2, 3];
        expect(IArray.lastIndexOf(array, 1)).to.equal(3);
        expect(IArray.lastIndexOf(array, 3)).to.equal(5);
        expect(IArray.lastIndexOf(array, 4)).to.equal(-1);
    });

    it('all type test', function () {
        IArray.each([null, void 0, [], false], function (index, val, array) {
            expect(IArray.lastIndexOf(array, val)).to.equal(index);
        });
    });
});

describe("remove function", () => {
    let myFish = ["angel", "clown", "mandarin", "surgeon"];

    it('basic', function () {
        let result = IArray.remove(myFish, 1);
        expect(result).to.equal("clown");
        expect(myFish.length).to.equal(3);
        expect(myFish).to.deep.equal(["angel", "mandarin", "surgeon"]);
    });

    it('error index should throw exception', function () {
        try {
            IArray.remove(myFish, 5);
        }
        catch (e) {
            expect(e.message).to.equal("index out of bounds");
        }
    });
});

describe("removeByValue function", () => {
    it('remove string value', function () {
        let myFish = ["angel", "clown", "mandarin", "surgeon"];
        IArray.removeByValue(myFish, 'mandarin');
        expect(myFish.length).to.equal(3);
        expect(IArray.indexOf(myFish, 'mandarin')).to.equal(-1);
    });

    it('remove number value', function () {
        let numbers = [1, 2, 3, 4, 5, 6, 7];
        IArray.removeByValue(numbers, 5);
        expect(numbers.length).to.equal(6);
        expect(IArray.indexOf(numbers, 5)).to.equal(-1);
        numbers = [1, 2, 3, 4, 5, 6, 7, 4];
        IArray.removeByValue(numbers, 4);
        expect(numbers.length).to.equal(7);
        expect(IArray.indexOf(numbers, 4)).to.equal(6);
    });

    it('remove object value', function () {
        let objects = [{a: 1, b: 2}, {a: 2, b: 4, c: {d: 1, e: 2}}];
        IArray.removeByValue(objects, {a: 1, b: 2});
        expect(objects.length).to.equal(1);
        expect(IArray.indexOf(objects, {a: 1, b: 2})).to.equal(-1);
    });
});

describe("removeRange function", () => {
    it('basic', function () {
        let myFish = ["angel", "clown", "mandarin", "surgeon"];
        let result = IArray.removeRange(myFish, 1, 3);

        expect(result).to.deep.equal(["clown", "mandarin"]);
        expect(myFish.length).to.equal(2);
        expect(myFish).to.deep.equal(["angel", "surgeon"]);
    });

    it('error index should throw exception ', function () {
        let myFish = ["angel", "clown", "mandarin", "surgeon"];

        try {
            IArray.removeRange(myFish, -2, 3);
        }
        catch (e) {
            expect(e.message).to.equal("startIndex or endIndex out of bounds");
        }
        try {
            IArray.removeRange(myFish, 2, 5);
        }
        catch (e) {
            expect(e.message).to.equal("startIndex or endIndex out of bounds");
        }
    });
});

describe("reverse function", () => {
    it('basic', function () {
        let myArray = ['one', 'two', 'three'];
        let myArray1 = IArray.reverse(myArray);
        expect(myArray[0]).to.equal("three");
        expect(myArray[1]).to.equal("two");
        expect(myArray[2]).to.equal("one");
        expect(myArray == myArray1).to.be.true;
    });
});

describe("sort function", () => {

    let stringArray = ["Blue", "Humpback", "Beluga"];
    let numberArray = [40, 1, 5, 200];

    function compareNumbers(a, b) {
        return a - b;
    }

    it('basic', function () {
        expect(IArray.sort(stringArray)).to.deep.equal(['Beluga', 'Blue', 'Humpback']);
        expect(IArray.sort(numberArray)).to.deep.equal([1, 200, 40, 5]);
        expect(IArray.sort(numberArray, compareNumbers)).to.deep.equal([1, 5, 40, 200]);
    });
});

describe("subArray function", () => {

    it('basic', function () {
        let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
        let citrus = IArray.subArray(fruits, 1, 3);
        expect(citrus).to.deep.equal(['Orange', 'Lemon']);

        let citrus1 = IArray.subArray(fruits, 1);
        expect(citrus1).to.deep.equal(['Orange', 'Lemon', 'Apple', 'Mango']);
    });
});

describe("toJson function", () => {
    let alpha = ['a', 'b', 1, true];
    let alpha1 = ['a', 'b', 1, true, void 0];

    it('basic', function () {
        expect(IArray.toJson(alpha)).to.equal('["a","b",1,true]');
        expect(IArray.toJson(alpha1)).to.equal('["a","b",1,true]');
    });
});

describe("toString function", () => {
    let alpha = ['a', 'b', 1, true];

    it('basic', function () {
        expect(IArray.toString(alpha)).to.equal('a,b,1,true');
    });
});