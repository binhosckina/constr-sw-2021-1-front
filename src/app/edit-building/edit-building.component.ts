import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from '../core/models/building.model';
import { BuildingService } from '../core/services/building.service';

@Component({
  selector: 'app-edit-building',
  templateUrl: './edit-building.component.html',
  styleUrls: ['./edit-building.component.css']
})
export class EditBuildingComponent implements OnInit {
  building = new Object as Building;
  id: string

  constructor(
    private service: BuildingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.get(this.id).subscribe(
      data => {
        this.building = data
      }
    )
  }

  save() {
    this.service.put(this.id, this.building).subscribe(
      () => {
        this.router.navigate(['/building', this.id])
      }
    )
  }
}
