import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
 template: `Product Detail
 <br> <a routerLink="spec">ProductSpec</a> | <a routerLink="overview">ProductOverview</a> <br>
  <router-outlet></router-outlet>`
})
export class ProductDetailComponent {

}
