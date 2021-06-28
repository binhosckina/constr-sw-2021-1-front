import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curricula } from 'src/app/core/models/curricula.model';
import { Skill } from 'src/app/core/models/skill.model';
import { CurriculaService } from 'src/app/core/services/curricula.service';
import { SkillService } from 'src/app/core/services/skill.service';

@Component({
  selector: 'app-curricula-detail',
  templateUrl: './curricula-detail.component.html',
  styleUrls: ['./curricula-detail.component.css']
})
export class CurriculaDetailComponent implements OnInit {
  curricula = {} as Curricula
  skills = [] as Skill[]
  id: string

  constructor(
    private service: CurriculaService,
    private skillService: SkillService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.get(this.id)
    this.getSkills()
  }

  get(id: string) {
    this.service.get(id).subscribe(
      data => {
        this.curricula = data
      }
    )
  }

  getSkills() {
    this.skillService.getAll().subscribe(
      data => {
        this.skills = data.filter(s => s.curriculumId == this.id)
      }
    )
  }
}
