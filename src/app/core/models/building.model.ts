import { Room } from "./room.model";

export interface Building {
  id: number;
  name: string;
  maxcapacity: number;
  floors: number;
  description: string;
  rooms: Room;
}
