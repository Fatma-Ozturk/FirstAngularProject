import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomIfDirective } from './custom-if.directive';
import { ExampleDirective } from './example.directive';
import { CustomForDirective } from './custom-for.directive';
import { ParentComponent } from './parent_to_child/parent/parent.component';
import { ChildComponent } from './parent_to_child/child/child.component';
import { Child2Component } from './child_to_parent/child2/child2.component';
import { Parent2Component } from './child_to_parent/parent2/parent2.component';
import { Parent3Component } from './child_to_child/parent3/parent3.component';
import { Child3Component } from './child_to_child/child3/child3.component';
import { Child31Component } from './child_to_child/child31/child31.component';
import { ExampleComponent } from './component/example/example.component';
import { AProductService, BProductService, ProductService } from './productservice';
import { AComponent } from './component/a/a.component';
import { BComponent } from './component/b/b.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { ReadUserComponent } from './component/read-user/read-user.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ROUTES, RouterModule } from '@angular/router';
import { routes } from './routes/route';
import { ErrorComponent } from './component/error/error.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductSpecComponent } from './component/product-spec/product-spec.component';
import { ProductOverviewComponent } from './component/product-overview/product-overview.component';
import { AqueryComponent } from './component/aquery/aquery.component';
import { BqueryComponent } from './component/bquery/bquery.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { CustomModule } from './custom/custom.module';
import { DenemeModule } from './deneme/deneme.module';
import { CustomStrategy } from './strategies/custom.strategy';
import { StandaloneComponent } from './component/standalone/standalone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomIfDirective,
    ExampleDirective,
    CustomForDirective,
    ParentComponent,
    ChildComponent,
    Child2Component,
    Parent2Component,
    Parent3Component,
    Child3Component,
    Child31Component,
    ExampleComponent,
    AComponent,
    BComponent,
    CreateUserComponent,
    ReadUserComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductSpecComponent,
    ProductOverviewComponent,
    AqueryComponent,
    BqueryComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StandaloneComponent
    //RouterModule.forRoot(routes)
  ],
  providers: [CustomStrategy,  ProductService,//DI Token - default type token
    {provide: "example", useValue: "merhaba"},
    {provide: "funcExample", useValue: () => {
      return "hello";
    }},
    {provide: "AProductService", useFactory: (example: string) => {
      return example == "merhaba" ? new AProductService() :  new BProductService();
    }, deps: ["example"]}],
  //providers : [{provide: ProductService, useClass: ProductService}] //typen token
  //providers : [{provide: "productService", useClass: ProductService} //string token
  //providers : [{provide: productServiceIT, useClass: ProductService} //injection token
  bootstrap: [AppComponent]
})
export class AppModule { }
