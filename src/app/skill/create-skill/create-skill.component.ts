import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curricula } from 'src/app/core/models/curricula.model';
import { Skill } from 'src/app/core/models/skill.model';
import { CurriculaService } from 'src/app/core/services/curricula.service';
import { SkillService } from 'src/app/core/services/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {
  skill = {} as Skill
  curricula = {} as Curricula
  curriculaId: string

  constructor(
    private service: SkillService,
    private curriculaService: CurriculaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.curriculaId = this.route.snapshot.paramMap.get('id')
    this.getCurricula(this.curriculaId)
  }

  getCurricula(id: string) {
    this.curriculaService.get(id).subscribe(
      data => {
        this.curricula = data
      }
    )
  }

  save() {
    this.skill.curriculumId = this.curriculaId
    this.service.post(this.skill).subscribe(
      () => {
        console.log(this.curricula)
        this.curricula.skills.push(this.skill)
        this.curriculaService.patch(this.curricula).subscribe(
          () => {
            this.router.navigate(['/curricula', this.curriculaId])
          }
        )
      }
    )
  }
}
