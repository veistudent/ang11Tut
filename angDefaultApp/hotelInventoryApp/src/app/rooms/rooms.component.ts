import { Component } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  title = 'the rooms component was created';
  nameOfHotel = 'Grand Budapest';
  anyRandomNum: number = Math.round(Math.random() * 578);

  constructor() {}
  ngOnInit(): void {}   /**ngOnInit is a method that returns type void (nothing) */
}
