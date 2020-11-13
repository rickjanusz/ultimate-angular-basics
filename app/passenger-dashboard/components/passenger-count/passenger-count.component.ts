import { Component, Input } from '@angular/core'
// interfaces
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-count',
  template: /*html*/ `
    <div>
      <h3>Airline Passengers</h3>
      <div>Total Checked In: {{ checkedInCount() }} / {{ items?.length }}</div>
    </div>
  `,
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[]
  checkedInCount(): number {
    if (!this.items) return
    return this.items.filter((passenger: Passenger) => passenger.checkedin)
      .length
  }
}
