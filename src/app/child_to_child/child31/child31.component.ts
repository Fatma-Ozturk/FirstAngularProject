import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child31',
  template: `<p>Child 31</p>
  
  `
})
export class Child31Component implements OnInit {
@Output() data : EventEmitter<any> = new EventEmitter();
ngOnInit(): void {
  this.data.emit("child31 den gelen veri");
}


}
