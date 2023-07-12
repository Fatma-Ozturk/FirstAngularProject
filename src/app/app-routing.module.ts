import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductSpecComponent } from './component/product-spec/product-spec.component';
import { ProductOverviewComponent } from './component/product-overview/product-overview.component';
import { AqueryComponent } from './component/aquery/aquery.component';
import { BqueryComponent } from './component/bquery/bquery.component';
import { canActivateChildGuard, canActivateGuard, canDeactivateGuard, isAdminGuard, isUserGuard, resolveGuard } from './guards/guards';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "home/:fatma", component: HomeComponent},
	{ path: "about", component: AboutComponent},
	{ path: "contact", component: ContactComponent},
  { path: "dashboard", component: AdminComponent, canMatch: [isAdminGuard]},
  { path: "dashboard", component: UserComponent, canMatch: [isUserGuard]}, 
  
  {path: "product", component: ProductComponent, data: {key1: "value1", key2: "value2"}, canActivate:[canActivateGuard], canDeactivate:[canDeactivateGuard], resolve: {photos: resolveGuard},
    children: [{path: "detail/:id", component: ProductDetailComponent, canActivateChild:[canActivateChildGuard],
      children: [{path: "", redirectTo:"overview", pathMatch: 'full'},
        {path: "spec", component: ProductSpecComponent}, 
        {path: "overview", component: ProductOverviewComponent}]}]},

  {path: "a", component: AqueryComponent},
  {path: "b", component: BqueryComponent},

  //lazy loading
  {path: "deneme", loadChildren: () => import("../app/deneme/deneme.module").then(m => m.DenemeModule)}, 
  {path: "custom", loadChildren: () => import("../app/custom/custom.module").then(m => m.CustomModule )}, 


  
	{ path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
