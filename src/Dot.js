"use strict";
exports.__esModule = true;
var Dot = /** @class */ (function () {
    function Dot(x, y) {
        this.dotMoveSpeed = 1;
        this.x = x;
        this.y = y;
        this.recomputePath();
    }
    Dot.prototype.tick = function () {
        if (this.x >= 1000) {
            this.deltaX = -Math.abs(this.deltaX);
        }
        else if (this.x <= 0) {
            this.deltaX = Math.abs(this.deltaX);
        }
        else if (this.y >= 1000) {
            this.deltaY = -Math.abs(this.deltaY);
        }
        else if (this.y <= 0) {
            this.deltaY = Math.abs(this.deltaY);
        }
        this.y += this.deltaY;
        this.x += this.deltaX;
    };
    Dot.prototype.recomputePath = function () {
        this.dotDirection = this.getRandomDirection();
        this.deltaY = this.dotMoveSpeed * Math.sin(this.dotDirection);
        this.deltaX = this.dotMoveSpeed * Math.cos(this.dotDirection);
    };
    Dot.prototype.getRandomDirection = function () {
        return Math.random() * 2 * Math.PI;
    };
    return Dot;
}());
exports.Dot = Dot;
