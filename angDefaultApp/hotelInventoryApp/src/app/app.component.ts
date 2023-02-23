import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', /** this is a dedicated html file */
  // template: `<p>\n peeky heyo world!</p><h2>inline inside ts file </h2>`, /**this is an inline html command: this is not preferred --> having a separate file is standard practice */
  styleUrls: ['./app.component.scss'], /**we may have multiple css files like bootstrap, etc. */
  styles: [`h3{color:teal}`]
})
export class AppComponent {
  title = '\'this is my hotelInv\'';

  constructor() {};
  ngOnInit(): void {};
}
 