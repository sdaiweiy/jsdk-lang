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

});

describe("clear function", () => {

});

describe("clone function", () => {

});

describe("contains function", () => {

});

describe("each function", () => {

});

describe("filter function", () => {

});

describe("indexOutOfBounds function", () => {

});

describe("isArray function", () => {

});

describe("isNullOrEmpty function", () => {

});

describe("isNotNullOrEmpty function", () => {

});

describe("indexOf function", () => {

});

describe("join function", () => {

});

describe("lastIndexOf function", () => {

});

describe("remove function", () => {

});

describe("removeByValue function", () => {

});

describe("removeRange function", () => {

});

describe("reverse function", () => {

});

describe("sort function", () => {

});

describe("subArray function", () => {

});

describe("toJson function", () => {

});

describe("toString function", () => {

});