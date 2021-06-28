import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../core/models/room.model';
import { BuildingService } from '../core/services/building.service';
import { RoomService } from '../core/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  room = {} as Room
  id: string

  constructor(
    private service: RoomService,
    private buildingService: BuildingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.service.get(this.id).subscribe(
      data => {
        this.room = data
        console.log(data)
        this.buildingService.get(this.room.buildingId.toString()).subscribe(
          buildingData => {
            this.room.building = buildingData
          }
        )
      }
    )
  }

}
