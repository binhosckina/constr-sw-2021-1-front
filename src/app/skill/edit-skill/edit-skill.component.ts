import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill = {} as Skill
  id: string

  constructor(
    private service: SkillService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.get(this.id)
  }

  get(id: string) {
    console.log('oi')
    this.service.get(id).subscribe(
      data => {
        console.log(data)
        this.skill = data[0]
      }
    )
  }

  save() {
    this.service.patch(this.id, this.skill).subscribe(
      () => {
        this.router.navigate(['/skill', this.id])
      }
    )
  }
}
