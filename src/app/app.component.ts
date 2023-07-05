import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<p>Hello world!</p>
  <hr>
  <div style= "background-color: aqua;">
    <app-home></app-home>
  </div>
  //two-way data binding
  <br>
  <input type="text" [(ngModel)]="name"><br>
  <input type="text" [(ngModel)]="name"><br>
  {{name}}
  <br>
  //structural custom if directive test
  <div *appCustomIf="true">
    custom if true
  </div>
  <br>
  <!--
  //structural custom for directive test
  <ul>
    <li *appCustomFor="5; let idx = index;">Fatma {{idx}}</li>
  </ul>
  -->
  //implicit keyword
  <!-- implicit bir tane kullanılabilir, burada sadece isim implicit -->
  <ul>
    <li *appCustomFor="names; let isim; let idx = index">{{isim}} - {{idx}}</li>
  </ul>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstAngularProject';
  name: string = "";
  names: string[] = ["Fatma", "Özdemir", "Öztürk"];
}
