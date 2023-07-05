import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomFor]'
})
export class CustomForDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

 /*  @Input() set appCustomFor(value: number) {
    for (let i = 0; i < value; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {index: i})
  }
  } */
  @Input() set appCustomFor(value: string[]) {
    for (let i = 0; i < value.length; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: value[i], index: i
      })
  }
  }
}
