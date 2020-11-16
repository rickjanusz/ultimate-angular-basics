import { Component, OnInit } from '@angular/core'

// Services
import { PassengerDashboardService } from '../../passenger-dashboard.service'

// Interfaces
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: /*html*/ ` <div>{{ passenger | json }}</div> `,
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => (this.passenger = data))
  }
}
