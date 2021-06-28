import { Building } from "./building.model";

export interface Room {
  id: number;
  buildingId: number;
  number: number;
  description: string;
  maxcapacity: number;
  type: string;
  building: Building;
}
