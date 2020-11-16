import { Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'

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
      Passenger Status:
      <label>
        <input
          type="radio"
          name="checkedin"
          [value]="true"
          [ngModel]="detail?.checkedin"
          (ngModelChange)="toggleCheckIn($event)"
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="checkedin"
          [value]="false"
          [ngModel]="detail?.checkedin"
          (ngModelChange)="toggleCheckIn($event)"
        />
        No
      </label>
    </div>

    <div *ngIf="form.value.checkedin">
      Check-in Date:
      <input type="number" name="checkinDate" [ngModel]="detail?.checkinDate" />
    </div>

    {{ form.value | json }}
  </form>`,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger
  toggleCheckIn(checkedin: boolean) {
    if (checkedin) {
      this.detail.checkinDate = Date.now()
    }
  }
}
