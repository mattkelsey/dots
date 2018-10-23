"use strict";
exports.__esModule = true;
var FoodGenerator = /** @class */ (function () {
    function FoodGenerator() {
    }
    FoodGenerator.generateFood = function () {
        console.log("making food");
        var foodPosX = Math.random() * (1000);
        var foodPosY = Math.random() * (1000);
        return { x: foodPosX, y: foodPosY };
    };
    return FoodGenerator;
}());
exports["default"] = FoodGenerator;
