import { Component, OnInit } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: /*html*/ `
    <div>
      <passenger-count [items]="passengers"> </passenger-count>
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      >
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[]
  constructor() {}
  ngOnInit() {
    console.log('ngOnInit')
    this.passengers = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedin: true,
        checkinDate: 1490742000000,
        children: [
          { name: 'Jackson', age: 12 },
          { name: 'Jack', age: 12 },
          { name: 'Jacqui', age: 12 },
        ],
      },
      {
        id: 2,
        fullname: 'Corduroy',
        checkedin: true,
        checkinDate: null,
        children: [
          { name: 'Pants', age: 17 },
          { name: 'Skirt', age: 18 },
          { name: 'Jacket', age: 15 },
          { name: 'Hat', age: 13 },
        ],
      },
      {
        id: 3,
        fullname: 'Shar',
        checkedin: false,
        checkinDate: 1491606000000,
        children: [{ name: 'Treuse', age: 1 }],
      },
      {
        id: 4,
        fullname: 'Olivia',
        checkedin: true,
        checkinDate: null,
        children: null,
      },
      {
        id: 5,
        fullname: 'Blake',
        checkedin: false,
        checkinDate: 1488412800000,
        children: [
          { name: 'Blaine', age: 11 },
          { name: 'Blair', age: 10 },
        ],
      },
    ]
  }
  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event)
      }
      return passenger
    })
  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id
    })
  }
}
