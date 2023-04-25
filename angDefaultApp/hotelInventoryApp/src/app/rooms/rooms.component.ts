import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { Room, RoomList } from './roomsInterface';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{    /**OnInit allows the application to start */
  titleOfComponent:string = 'the rooms component was created';   /**we do not need to specify the type because Ang infers the type */
  nameOfHotel:string = 'The Grand Budapest Hotel';
  anyRandomNum:number = Math.round(Math.random() * 1000);
  numberOfRooms:number = Math.round(Math.random() * 50);
  hideBodyBool:boolean = true;
  fibNums:number[] = [0,1];
  fibSum:number = 1;

  displayTable:boolean = true;
  selectedRoom!: RoomList;

  /**3:28 --> we are now using directives to mod the DOM */
  /**and we create a new var of type of the interface */
  rooms: Room = {
    totalRooms:20,
    availableRooms: 3,
    bookedRooms: 16,
    unavailable: 1
  };

  roomList: RoomList[] =[
    {
      roomNumber: 11,
      roomType: 'Deluxe',
      amenities: 'AC',
      price: 250,
      photos: 'http://www.w3.org/2000/svg',
      checkInTime: new Date('14-Mar-2023'),
      checkOutTime: new Date('15-Mar-2023')
    },
    {
      roomNumber: 22,
      roomType: 'Regular',
      amenities: 'AC',
      price: 150,
      photos: 'http://www.w3.org/2000/svg',
      checkInTime: new Date('16-Mar-2023'),
      checkOutTime: new Date('17-Mar-2023'),
    },
    {
      roomNumber: 33,
      roomType: 'Suite',
      amenities: 'AC',
      price: 400,
      photos: 'http://www.w3.org/2000/svg',
      checkInTime: new Date('21-Mar-2023'),
      checkOutTime: new Date('22-Mar-2023'),
    }
  ];

  public constructor() {}
  public ngOnInit(): void {}   /**ngOnInit initiates the component*/

  public hideBody() {
    this.hideBodyBool = !this.hideBodyBool;
 }

 increaseRooms():void {
  if (this.AreAvailable()) {
    this.rooms.bookedRooms++;
    this.rooms.availableRooms--;
    // return 'one room was added to the booked list';
  }
  // return 'No available rooms were added to the booked list.';
 }

 decreaseRooms(): void {
  if ( this.canDecreaseRooms() ) {
    this.rooms.bookedRooms--;
    this.rooms.availableRooms++;
  }
 }

 canDecreaseRooms(): boolean {
  if (  this.rooms.availableRooms <= 20 && 
        this.rooms.availableRooms >= 0   && 
        this.rooms.bookedRooms > 0) {
          return true;
  }
  return false;
 }

 AreAvailable():boolean {
  if (this.rooms.availableRooms > 0) return true;
  return false;
 }

 DisableAdd(): boolean { 
  if (this.rooms.availableRooms == 0) {
    return true;
  }
  return false;
 }

 DisableRemove(): boolean {
  if( this.rooms.availableRooms == (this.rooms.totalRooms - 1)) {
    return true;
  }
  return false;
 }


 public fibIncrease(): void {
  let arrLen:number = this.fibNums.length;
  let fibLastElem = this.fibNext(arrLen);
  this.fibNums.push(fibLastElem);
  this.fibSum += fibLastElem;
 } // end method to increase fib seq to the next number
 
 private fibDecrease():void {
  //dff
 }
 private fibNext(arLen: number): number {
  let sumLastTwo:number = this.fibNums[arLen - 1] + this.fibNums[arLen - 2];
  return sumLastTwo;
 }

 toggleTable(): void {
	this.displayTable = !this.displayTable;
  console.log(`hahaha this is the displayTable var: ${this.displayTable}`);
  // return this.displayTable;
 }

 selectRoom(room: RoomList) {
  // console.log(`the room is: ${JSON.stringify(room)}`);
  this.selectedRoom = room;
 }

}

