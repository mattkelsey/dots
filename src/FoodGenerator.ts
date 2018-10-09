interface FoodGenerator {
  generateFood(): any;
}

class FoodGenerator {
  public static generateFood(): any {
    console.log("making food");
    var foodPosX = Math.random() * (1000);
    var foodPosY = Math.random() * (1000);
    return { x: foodPosX, y: foodPosY };
  }
}

export default FoodGenerator;