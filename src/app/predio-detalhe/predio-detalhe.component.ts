import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from '../core/models/building.model';
import { Room } from '../core/models/room.model';
import { BuildingService } from '../core/services/building.service';
import { RoomService } from '../core/services/room.service';

@Component({
  selector: 'app-predio-detalhe',
  templateUrl: './predio-detalhe.component.html',
  styleUrls: ['./predio-detalhe.component.css']
})
export class PredioDetalheComponent implements OnInit {
  building: Building
  rooms = [] as Room[]
  id: string

  constructor(
    private service: BuildingService,
    private roomService: RoomService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.get(this.id)
    this.getAllRooms()
  }

  get(id: string) {
    this.service.get(id).subscribe(
      data => {
        this.building = data
      }
    )
  }

  getAllRooms() {
    this.roomService.getAll().subscribe(
      data => {
        this.rooms = data.filter(room => room.buildingId.toString() == this.id)
      }
    )
  }

  deleteRoom(id: string) {
    this.roomService.delete(id).subscribe(
      () => {
        this.getAllRooms()
      }
    )
  }
}
