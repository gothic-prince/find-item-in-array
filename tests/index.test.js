"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var array = ['a', 'b', 'c', 'd', 'e', 'f'];
describe('thFromEndOfArray', function () {
    it('it should return "e"', function () {
        expect(index_1.default(2).thFromEndOfArray(array)).toBe('e');
    });
    it('it should return "f"', function () {
        expect(index_1.default(1).thFromEndOfArray(array)).toBe('f');
    });
    it('it should return "a"', function () {
        expect(index_1.default(20).thFromEndOfArray(array)).toBe('a');
    });
    it('it should return "a"', function () {
        expect(index_1.default(6).thFromEndOfArray(array)).toBe('a');
    });
});
describe('thFromStartOfArray', function () {
    it('it should return "e"', function () {
        expect(index_1.default(5).thFromStartOfArray(array)).toBe('e');
    });
    it('it should return "f"', function () {
        expect(index_1.default(6).thFromStartOfArray(array)).toBe('f');
    });
    it('it should return "f"', function () {
        expect(index_1.default(20).thFromStartOfArray(array)).toBe('f');
    });
    it('it should return "a"', function () {
        expect(index_1.default(1).thFromStartOfArray(array)).toBe('a');
    });
});
