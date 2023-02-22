import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<p>\npeeky heyo world!\n\n<h2>inline inside ts file </h2></p>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelInventoryApp';
}
