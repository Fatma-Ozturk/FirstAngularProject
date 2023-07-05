import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CustomIfDirective } from './custom-if.directive';
import { ExampleDirective } from './example.directive';
import { CustomForDirective } from './custom-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomIfDirective,
    ExampleDirective,
    CustomForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
