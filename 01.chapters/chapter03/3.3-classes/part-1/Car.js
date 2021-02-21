class Car {
    constructor(id, brand, name, price, color) {
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.color = color;
    }

    getCarPrice() {
      //   console.log(this.id);
        return this.price;
    }
}
