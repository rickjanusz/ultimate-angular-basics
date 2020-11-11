export interface Child {
  name: string,
  age: number
}

export interface Passenger {
  id: number,
  fullname: string,
  checkedin: boolean,
  checkinDate: number | null,
  children: Child[] | null,
}