import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {
  skill = {} as Skill
  curriculaId: string

  constructor(
    private service: SkillService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.curriculaId = this.route.snapshot.paramMap.get('id')
  }

  save() {
    this.skill.curriculumId = this.curriculaId
    this.service.post(this.skill).subscribe(
      () => {
        this.router.navigate(['/curricula', this.curriculaId])
      }
    )
  }
}
