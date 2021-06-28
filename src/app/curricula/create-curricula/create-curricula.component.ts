import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curricula } from 'src/app/core/models/curricula.model';
import { CurriculaService } from 'src/app/core/services/curricula.service';

@Component({
  selector: 'app-create-curricula',
  templateUrl: './create-curricula.component.html',
  styleUrls: ['./create-curricula.component.css']
})
export class CreateCurriculaComponent implements OnInit {
  curricula = {} as Curricula

  constructor(
    private service: CurriculaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.service.post(this.curricula).subscribe(
      () => {
        this.router.navigate(['/curricula'])
      }
    )
  }
}
