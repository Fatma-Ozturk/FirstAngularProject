import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div style="background-color: pink;">
    <p>child works!</p>
    {{childData}}
  </div>`,
})
export class ChildComponent {

  @Input() childData: any;

}
