import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation-component/navigation-component.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductImageComponent } from './product-list/product/product-image/product-image.component';
import { ProductPriceComponent } from './product-list/product/product-price/product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BreadcrumbsComponent,
    ProductListComponent,
    ProductComponent,
    ProductImageComponent,
    ProductPriceComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
