import { Component } from '@angular/core';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-b',
  template: `
    BComponent - > {{randomService.random}} <br>
    <div appD></div>
  `
})
export class BComponent {constructor(public randomService: RandomService) {}
}
