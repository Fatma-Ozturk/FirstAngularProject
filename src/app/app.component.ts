import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { capitalLetterPValidation, capitalLetterValidation, matchPassword } from './validators/funcs';
import { AProductService, ProductService, ProductServiceNoProviders } from './productservice';
import { RandomService } from './random.service';
import { StandaloneComponent } from './component/standalone/standalone.component';

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
  <input type="text" [(ngModel)]="namee"><br>
  <input type="text" [(ngModel)]="namee"><br>
  {{namee}}
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
  //Template-Driven Form
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
  <br>
  <hr>
  //Model-Driven Form
  <form [formGroup]="frmm" (ngSubmit)="submitFonkModel()">
    <input type="text" placeholder="Name" formControlName="name"><br>
    <div *ngIf="!name?.valid && (name?.dirty || name?.touched)">
      {{name?.errors | json}}
    </div>
    <input type="text" placeholder="Surname" formControlName="surname"><br>
    <div *ngIf="!surname?.valid && (surname?.dirty || surname?.touched)">
      {{surname?.errors | json}}
    </div>
    <input type="email" placeholder="Email" formControlName="email"><br>
    <div *ngIf="!email?.valid && (email?.dirty || email?.touched)">
      {{email?.errors | json}}
    </div>
    <input type="tel" placeholder="Tel" formControlName="tel"><br>
    <div formGroupName="address">
      <input type="text" name="country" placeholder="country" formControlName="country"><br>
      <input type="text" name="city" placeholder="city" formControlName="city"><br>
      <input type="text" name="address" placeholder="address" formControlName="address"><br>
    </div>
    <div formGroupName="password">
      <input type="text" name="password" placeholder="password" formControlName="password"><br>
      <input type="text" name="passwordConfirm" placeholder="passwordConfirm" formControlName="passwordConfirm"><br>
      <div *ngIf="!password?.valid && (password?.dirty || password?.touched)">
        {{password?.errors | json}}
    </div>
    </div>
    <button>Send</button>
  </form>
  <br>
  //RandomService Self SelfSkip Optional Decorator Test
  <br> AppComponent - > {{randomService.random}} <br>
  <app-a></app-a>
  <br>
  <hr>
  <app-create-user></app-create-user> <br>
  <app-read-user></app-read-user> <br> 
  //Routing
  <br> 
  <a routerLinkActive="active" routerLink="home">Home</a> |
  <a routerLink="about">About</a> |
  <a routerLink="dashboard">Dashboard</a> |
  <a routerLink="contact">Contact</a>
  <br>
  <router-outlet></router-outlet>
  <br> <hr>
  <button (click)="go()">Go</button> <br>
  <hr> <br>
  //Child/Nested Routes
  <br> <a routerLink="product" [state]="{key3: 'value3', key4: 'value4'}">Product</a> <br>
  <router-outlet></router-outlet>
  <br> <hr> <br>
  //Query String
  <br> <a routerLink="a" [queryParams]="{x : 3}">A</a> & <a routerLink="b" [queryParams]="bquerystring" queryParamsHandling="merge">B</a> <br>
  <router-outlet></router-outlet>
  <br> <hr> <br>
  //Lazy Loading
  <br> <a routerLink="deneme">Deneme</a> | <a routerLink="custom">Custom</a> <br>
  <router-outlet></router-outlet>
  <br> <hr> <br>
  //Standalone Component
  <br> <app-standalone></app-standalone> <br>
  <a routerLink="standalone">Standalone</a> <br>
  <router-outlet></router-outlet>
`,
  styles: [".active{color:red;}"],  
})
export class AppComponent {
  title = 'FirstAngularProject';
  namee: string = "";
  names: string[] = ["Fatma", "Özdemir", "Öztürk"];

  @ViewChild("frm", { static: true })
  frm!: NgForm;

  submitFonk(data: any): void {
    console.log(`Value: ${this.frm.value}`);
    console.log(`Valid: ${this.frm.valid}`);
    console.log(`Touched: ${this.frm.touched}`);
    console.log(`Submitted: ${this.frm.submitted}`);
    console.log(data);
    console.log(this.frm);
    console.log(this.frm.form);
    console.log(this.frm.controls);
  }

  frmm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public randomService: RandomService,
    private productService: ProductService,
    private productNoProviders: ProductServiceNoProviders,
    @Inject("example") value: string,
    @Inject("funcExample") functionExample: Function,
    @Inject("AProductService") private AProductService: AProductService) {
    //@Inject("productService") private productService: ProductService //string token injected
    //@Inject(productServiceIT) private productService: PorductService //injection token injected
    console.log(value);
    console.log(functionExample());
    console.log(AProductService.getAProducts());
    //dependency injection
    console.log(productService.getProducts());
    //dependency injection without providers
    console.log(productNoProviders.getProductsNoProviders());

    this.frmm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), capitalLetterValidation]],
      surname: ["", [Validators.required, capitalLetterPValidation(3)]],
      email: ["", [Validators.required, Validators.email]],
      tel: [""],
      address: formBuilder.group({
        country: [""],
        city: [""],
        address: [""]
      }),
      password: formBuilder.group({
        password: ["", Validators.required],
        passwordConfirm: ["", Validators.required]
      }, { validators: [matchPassword()] }),
    })

    this.frmm.valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    })

    this.frmm.statusChanges.subscribe({
      next: data => {
        console.log(data);
      }
    })
  }


  get name() {
    return this.frmm.get("name");
  }

  get surname() {
    return this.frmm.get("surname");
  }

  get email() {
    return this.frmm.get("email");
  }

  public get password() {
    return this.frmm.get("password");
  }

  public get passwordConfirm() {
    return this.frmm.get("passwordConfirm");
  }


  submitFonkModel() {
    console.log(this.frmm.value);
  }

  //html 5 routing
  go() {
    history.pushState({ message: "Hello" }, "title", "/a/b");
  }

  //query string 
  bquerystring : any = {
    ahmet: "mehmet"
  }
}
