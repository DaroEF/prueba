import { IUser } from "../../types/user";

export const users : IUser[] = [
  {
    id: 1,
    name: "John Galt",
    email: "johngalt@mail.com",
    birthdate: new Date("1987-03-31"),
    dni_number: 12345678,
    phone: 1234567890,
    appointments: [],
    credentialsId: 1,
  },
  {
    id: 2,
    name: "Howard Roark",
    email: "howardroark@mail.com",
    birthdate: new Date("1980-04-14"),
    dni_number: 87654321,
    phone: 123456788,
    appointments: [],
    credentialsId: 2,
  },
]