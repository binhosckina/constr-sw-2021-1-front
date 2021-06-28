import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Building } from '../core/models/building.model';
import { Room } from '../core/models/room.model';
import { BuildingService } from '../core/services/building.service';
import { RoomService } from '../core/services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  room = {} as Room
  buildings = [] as Building[]

  constructor(
    private service: RoomService,
    private buildingService: BuildingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildingService.getAll().subscribe(
      data => {
        this.buildings = data
      }
    )
  }

  save() {
    this.service.post(this.room).subscribe(
      () => {
        this.router.navigate(['/building', this.room.buildingId])
      }
    )
  }
}
