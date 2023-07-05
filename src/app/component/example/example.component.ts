import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    Example
    <!--selector içine yazdığım content tetikleyecek ve ekrana yazılacak-->
    <br>
    <input type="text" [(ngModel)]="data"> <br>
    <ng-content></ng-content>
    `
})
export class ExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() data: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. ngOnchanges Tetiklendi");
  }

  ngOnInit(): void {
    console.log("2. ngOnInit Tetiklendi");
  }

  ngDoCheck(): void {
    console.log("3. ngDoCheck Tetiklendi");
  }

  ngAfterContentInit(): void {
    console.log("4.ngAfterContentInit Tetiklendi");
  }

  ngAfterContentChecked(): void {
    console.log("5.ngAfterContentChecked Tetiklendi");
  }

  ngAfterViewInit(): void {
    console.log("6.ngAfterViewInit Tetiklendi");
  }

  ngAfterViewChecked(): void {
    console.log("7.ngAfterViewChecked Tetiklendi");
  }

  ngOnDestroy(): void {
    console.log("8.ngOnDestroy Tetiklendi");
  }
}
