import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'
import { Baggage } from '../../models/baggage.interface'

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: /*html*/ ` <form
    (ngSubmit)="handleSubmit(form.value, form.valid)"
    #form="ngForm"
    novalidate
  >
    {{ detail | json }}

    <div>
      Passenger Name:
      <input
        type="text"
        name="fullname"
        #fullname="ngModel"
        required
        [ngModel]="detail?.fullname"
      />
      <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
        Passenger name is required
      </div>
    </div>

    <div>
      Passenger ID:
      <input
        type="number"
        name="id"
        required
        #id="ngModel"
        [ngModel]="detail?.id"
      />
      <div *ngIf="id.errors?.required && id.dirty" class="error">
        Passenger ID is required
      </div>
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
    </div>

    <button type="submit" [disabled]="form.invalid">Update Passenger</button>
  </form>`,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>()

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
  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger)
    }
  }
}
