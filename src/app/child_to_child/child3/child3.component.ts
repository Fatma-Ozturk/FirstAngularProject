import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  template: `<p>Child 3.... {{data}}</p>`,
})
export class Child3Component {

  @Input() data: any;

}
