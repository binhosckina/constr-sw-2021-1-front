import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.get(this.id)
  }

  get(id: string) {
    this.skills = [] as Skill[]
    this.service.get(id).subscribe(
      curricula => {
        this.curricula = curricula
        curricula.skills.forEach(skillId => {
          this.skillService.get(skillId).subscribe(
            skill => {
              this.skills.push(skill[0])
            }
          )
        })
      }
    )
  }

  delete(skillId: string) {
    this.curricula.skills = this.curricula.skills.filter(s => s != skillId)
    this.service.patch(this.id, this.curricula).subscribe()
    this.get(this.id)
  }

  navigateToEdit() {
    this.router.navigate(['/edit-curricula', this.id])
  }

  navigateToCreateSkill() {
    this.router.navigate(['/create-skill', this.id])
  }
}
