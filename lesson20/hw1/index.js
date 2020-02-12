export class Order {
  constructor(price, city, type){
    this.price = price;
    this.city = city;
    this.type = type;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.id = Math.random().toString(36).substring(7);
  }

  checkPrice(){
    return this.price > 1000 ? true : false;
  }

  confirmOrder(){
    if (!this.isConfirmed) {
      this.isConfirmed = true;
    }
    this.dateCreated = new Date();
  }

  isValidType(){
    if (this.type === 'Buy' || this.type === 'Sell') return true;
    return false;
  }
}

const order1 = new Order(1000, 'Lviv', 'Sell');
console.log(order1);
order1.confirmOrder();
console.log(order1);
