import { IUser } from "../user";

export enum Status {
  ACTIVE = "CANCELED",
  CANCELED = "CANCELED"
}

export interface IAppointment {
  id?: number;
  date: Date;
  time: string;
  description: string;
  status: Status;
  userId: IUser["id"];
} 