import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  template: `
  <div style="background-color: yellow;">
    <p>Parent 3</p>
    <app-child31 (data)="childData($event)"></app-child31> <br>

    <app-child3 [data]="child31Message"></app-child3> <br>

  </div>
  `
})
export class Parent3Component {
  child31Message: any;
  childData(message: string){
    this.child31Message = message;
  }

}
