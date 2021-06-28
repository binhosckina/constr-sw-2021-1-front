import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Building } from '../core/models/building.model';
import { BuildingService } from '../core/services/building.service';

@Component({
  selector: 'app-create-building',
  templateUrl: './create-building.component.html',
  styleUrls: ['./create-building.component.css']
})
export class CreateBuildingComponent implements OnInit {
  building = new Object as Building;

  constructor(
    private service: BuildingService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.service.post(this.building).subscribe(
      () => {
        this.router.navigate(['/building'])
      }
    )
  }
}
