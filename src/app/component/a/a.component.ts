import { Component } from '@angular/core';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-a',
  template: `
    AComponent - > {{randomService.random}} <br>
    <app-b></app-b>
  `
})
export class AComponent { constructor(public randomService: RandomService) {};

}
