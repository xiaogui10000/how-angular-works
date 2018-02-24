export class Product {
  title: string;
  SKU: string;
  imageUrl: string;
  department: string[];
  price: number;
  constructor(
    title: string,
    SKU: string,
    imageUrl: string,
    department: string[],
    price: number
  ) {
    this.title = title;
    this.SKU = SKU;
    this.imageUrl = imageUrl;
    this.department = department;
    this.price = price;
  }
}
