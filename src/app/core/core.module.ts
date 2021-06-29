import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { CurriculaService } from './services/curricula.service';
import { SkillService } from './services/skill.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    CurriculaService,
    SkillService
  ]
})
export class CoreModule { }
