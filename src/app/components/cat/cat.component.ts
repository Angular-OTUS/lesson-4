import { Component } from '@angular/core';

@Component({
  selector: 'app-cat',
  template: `
    <h3>Cat</h3>
    <p>
       cat works!
     </p>
   `,
  styleUrls: [
    './cat.component.scss', // blue
    '../common.scss' // red
  ]
})
export class CatComponent {

}
