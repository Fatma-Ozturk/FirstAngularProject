import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `<p>child2 works!</p>
  `
})
export class Child2Component implements
OnInit{
    ngOnInit(): void {
      this.dataEvent.emit({message: 'Merhaba'});
    }
  
    @Output() dataEvent: EventEmitter<any>
    = new EventEmitter();
}

