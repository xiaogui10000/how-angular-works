import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() ProductSelected: EventEmitter<Product>;
  private CurrProduct: Product;
  constructor() {
    this.ProductSelected = new EventEmitter<Product>();
  }

  clicked(product: Product): void {
    this.CurrProduct = product;
    this.ProductSelected.emit(product);
  }
  isSelected(product: Product): boolean {
    if (!product || !this.CurrProduct) {
      return false;
    }
    return product.SKU === this.CurrProduct.SKU;
  }
  ngOnInit() {}
}
