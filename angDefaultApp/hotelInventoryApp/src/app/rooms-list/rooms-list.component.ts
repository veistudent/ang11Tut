import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms/roomsInterface';

@Component({
  selector: 'rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  @Input()
  rooms: RoomList[] = [];

  @Output()
  //the name of the event is 'selectedRoom' and takes the type of data that needs to be sent to the parent
  selectedRoom = new EventEmitter<RoomList>();    //this event emits/outputs data of type 'RoomList'; here we have a singular item - not an array - because I want to pass only the selected room to be acted upon by the parent comp
  
  constructor() {}
  ngOnInit(): void {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
