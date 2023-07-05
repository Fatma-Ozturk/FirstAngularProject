import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<p>parent works!</p>
  <!--köşeli parantez ile kullanımı değişken alabilir demektir -->
  <app-child [childData]="data"></app-child>
  <!--<app-child childData="Hello"></app-child>-->
  `,
})
export class ParentComponent {

  data: any = "Merhaba";
}
