import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Standalone2Component } from '../standalone2/standalone2.component';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, Standalone2Component],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent {

}
