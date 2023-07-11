import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "home/:fatma", component: HomeComponent},
	{ path: "about", component: AboutComponent},
	{ path: "contact", component: ContactComponent},
  
  {path: "product", component: ProductComponent, 
    children: [{path: "detail/:id", component: ProductDetailComponent}]},
  
	{ path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
