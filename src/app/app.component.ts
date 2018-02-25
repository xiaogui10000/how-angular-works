import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'nice hat',
        'Nice black hat',
        'https://media-exp2.licdn.com/mpr/mpr/AAEAAQAAAAAAAAQbAAAAJDJhZWE5YjY0LTFhZTktNDg2My1iZmI2LTM5YmNiMTc4NWVkZg.jpg',
        ['Men', 'Accessories', 'Hats'],
        30
      ),
      new Product(
        'nice shoe',
        'Nice blue shoe',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3bo3ukAy_tcs1pGgPucN1o4jCTxmD-irkA5ErtIiOyXXFojt-g',
        ['Women', 'Accessories', 'Shoes'],
        130
      ),
    ];
  }
}
