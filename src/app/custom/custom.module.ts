import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "custom", component: ListComponent },
      { path: "custom/add", component: AddComponent },
    ])
  ]
})
export class CustomModule { }
