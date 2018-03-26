"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(value) {
    return new findItem(value);
}
exports.default = default_1;
var findItem = (function () {
    function findItem(value) {
        this.value = value;
    }
    findItem.prototype.thFromEndOfArray = function (items) {
        if (items.length >= this.value) {
            var index = items.length - this.value;
            return items[index];
        }
        return items[0];
    };
    findItem.prototype.thFromStartOfArray = function (items) {
        if (items.length >= this.value) {
            var index = this.value - 1;
            return items[index];
        }
        return items[items.length - 1];
    };
    return findItem;
}());
