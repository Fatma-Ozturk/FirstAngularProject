import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<p>Hello world!</p>
  <hr>
  <div style= "background-color: aqua;">
    <app-home></app-home>
  </div>
  //two-way data binding
  <input type="text" [(ngModel)]="name"><br>
  <input type="text" [(ngModel)]="name"><br>
  {{name}}
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstAngularProject';
  name: string= "";
}
