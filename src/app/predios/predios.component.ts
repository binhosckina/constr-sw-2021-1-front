import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/core/models/building.model';
import { BuildingService } from '../core/services/building.service';

@Component({
  selector: 'app-predios',
  templateUrl: './predios.component.html',
  styleUrls: ['./predios.component.css']
})
export class PrediosComponent implements OnInit {
  buildings: Building[];

  constructor(
    private route: ActivatedRoute,
    private service: BuildingService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(
      data => {
        this.buildings = data
      }
    )
  }

  delete(id: string) {
    this.service.delete(id).subscribe(
      () => {
        this.getAll();
      }
    )
  }
}
