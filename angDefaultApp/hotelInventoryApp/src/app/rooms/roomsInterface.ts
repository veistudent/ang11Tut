export interface Room{
    totalRooms:number;
    availableRooms:number;
    bookedRooms:number;
    unavailable?: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;
}

let startTime = Date.now()
console.log(`start time: ${startTime}`);
let rating: number = 0;
let elems:Array<number> = [];
for (let index = 0; index < 3000; index++) {
    elems.push(Math.floor(Math.random() * 6));
    rating += elems[index];
}
let endTime = Date.now();
console.log(`end time is: ${endTime}`);

console.log(`the sum of all ratings: ${rating}`);
console.log(`the average of ratings: ${rating / 3000}`);
console.log(`time to complete the loop: ${endTime - startTime}`);