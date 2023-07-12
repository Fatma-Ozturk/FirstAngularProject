import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "deneme", component: ListComponent },
      { path: "deneme/add", component: AddComponent }
    ])
  ]
})
export class DenemeModule { }
