import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
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
  //Component Life Cycle Hook
  <app-example data="merhaba">content</app-example><br>
  <hr>
  //Template-Drive Form
  <form #frm="ngForm" (ngSubmit)="submitFonk(frm.value)">
    <input type="text" name="name" placeholder="Name" ngModel><br>
    <input type="text" name="surname" placeholder="Surname" ngModel><br>
    <input type="email" name="email" placeholder="Email" ngModel><br>
    <input type="tel" name="tel" placeholder="Tel"><br>
    <div ngModelGroup="address">
      <input type="text" name="country" placeholder="country" ngModel><br>
      <input type="text" name="city" placeholder="city" ngModel><br>
      <input type="text" name="address" placeholder="address" ngModel><br>
    </div>

    <button>Send</button>
  </form>
`,
})
export class AppComponent {
  title = 'FirstAngularProject';
  name: string = "";
  names: string[] = ["Fatma", "Özdemir", "Öztürk"];

  @ViewChild("frm", { static: true })
  frm!: NgForm;

  submitFonk(data: any): void{
    console.log(`Value: ${this.frm.value}`);
    console.log(`Valid: ${this.frm.valid}`);
    console.log(`Touched: ${this.frm.touched}`);
    console.log(`Submitted: ${this.frm.submitted}`);
    console.log(data);
    console.log(this.frm);
    console.log(this.frm.form);
    console.log(this.frm.controls);

    
  }
}
