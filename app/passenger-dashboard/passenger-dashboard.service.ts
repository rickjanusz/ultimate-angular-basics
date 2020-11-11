import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Passenger } from './models/passenger.interface'

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Passenger[] {
    return [
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
}
