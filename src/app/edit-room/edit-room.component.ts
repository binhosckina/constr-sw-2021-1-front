import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from '../core/models/building.model';
import { Room } from '../core/models/room.model';
import { BuildingService } from '../core/services/building.service';
import { RoomService } from '../core/services/room.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  room = {} as Room
  buildings = [] as Building[]
  id: string

  constructor(
    private service: RoomService,
    private buildingService: BuildingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.buildingService.getAll().subscribe(
      data => {
        this.buildings = data
      }
    )
    this.service.get(this.id).subscribe(
      data => {
        this.room = data
      }
    )
  }

  save() {
    this.service.put(this.id, this.room).subscribe(
      () => {
        this.router.navigate(['/building', this.room.buildingId])
      }
    )
  }
}
