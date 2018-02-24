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
  constructor() {}

  ngOnInit() {}
}
