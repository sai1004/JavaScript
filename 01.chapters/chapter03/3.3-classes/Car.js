export class Car {
  constructor(brand, name, price, color) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.color = color;
  }

  getCarPrice() {
    return this.price;
  }
}
