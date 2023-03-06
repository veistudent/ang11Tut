import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { Room } from './roomsInterface';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{    /**OnInit allows for the application to start */
  titleOfComponent:string = 'the rooms component was created';   /**we do not need to specify the type because Ang infers the type */
  nameOfHotel:string = 'The Grand Budapest Hotel';
  anyRandomNum:number = Math.round(Math.random() * 1000);
  numberOfRooms:number = Math.round(Math.random() * 50);
  hideBodyBool:boolean = false;

  /**3:28 --> we are now using directives to mod the DOM */
  /**and we create a new var of type of the interface */
  rooms: Room = {
    totalRooms:20,
    availableRooms: 8,
    bookedRooms: 11
  };

  constructor() {}
  ngOnInit(): void {}   /**ngOnInit is a method that returns type void (nothing) */

  hideBody() {
    this.hideBodyBool = !this.hideBodyBool;
  }
}
