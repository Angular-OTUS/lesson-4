import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-standalone.component.html',
  styleUrls: ['./example-standalone.component.scss']
})
export class ExampleStandaloneComponent {

}
