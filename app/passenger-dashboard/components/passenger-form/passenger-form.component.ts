import { Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'
import { Baggage } from '../../models/baggage.interface'

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: /*html*/ ` <form #form="ngForm" novalidate>
    {{ detail | json }}

    <div>
      Passenger Name:
      <input type="text" name="fullname" [ngModel]="detail?.fullname" />
    </div>

    <div>
      Passenger ID:
      <input type="number" name="id" [ngModel]="detail?.id" />
    </div>

    <hr />
    <div>
      Passenger Check In Status:
      <label>
        <input
          type="checkbox"
          name="checkedin"
          [ngModel]="detail?.checkedin"
          (ngModelChange)="toggleCheckIn($event)"
        />
      </label>
    </div>

    <div *ngIf="form.value.checkedin">
      Check-in Date:
      <input type="number" name="checkinDate" [ngModel]="detail?.checkinDate" />
    </div>

    <div>
      Luggage:
      <select name="baggage" [ngModel]="detail?.baggage">
        <option
          *ngFor="let item of baggage"
          [value]="item.key"
          [selected]="item.key === detail?.baggage"
        >
          {{ item.value }}
        </option>
      </select>
      <select name="baggage" [ngModel]="detail?.baggage">
        <option *ngFor="let item of baggage" [ngValue]="item.key">
          {{ item.value }}
        </option>
      </select>
    </div>

    {{ form.value | json }}
  </form>`,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger
  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage',
    },
    {
      key: 'hand-only',
      value: 'Hand baggage',
    },
    {
      key: 'hold-only',
      value: 'Hold baggage',
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage',
    },
  ]
  toggleCheckIn(checkedin: boolean) {
    if (checkedin) {
      this.detail.checkinDate = Date.now()
    }
  }
}
