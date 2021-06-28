import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill.service';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {
  skill = {} as Skill
  id: string

  constructor(
    private service: SkillService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.get(this.id)
  }

  get(id: string) {
    this.service.get(id).subscribe(
      data => {
        this.skill = data
      }
    )
  }
}
