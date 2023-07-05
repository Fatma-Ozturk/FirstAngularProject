import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
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
    Child31Component
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
