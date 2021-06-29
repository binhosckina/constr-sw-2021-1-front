import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCurriculaComponent } from './curricula/create-curricula/create-curricula.component';
import { CurriculaDetailComponent } from './curricula/curricula-detail/curricula-detail.component';
import { CurriculaListComponent } from './curricula/curricula-list/curricula-list.component';
import { EditCurriculaComponent } from './curricula/edit-curricula/edit-curricula.component';
import { CreateSkillComponent } from './skill/create-skill/create-skill.component';
import { EditSkillComponent } from './skill/edit-skill/edit-skill.component';
import { SkillDetailComponent } from './skill/skill-detail/skill-detail.component';

const routes: Routes = [
  {
    path: 'curricula',
    component: CurriculaListComponent
  },
  {
    path: 'curricula/:id',
    component: CurriculaDetailComponent
  },
  {
    path: 'create-curricula',
    component: CreateCurriculaComponent
  },
  {
    path: 'edit-curricula/:id',
    component: EditCurriculaComponent
  },
  {
    path: 'skill/:id',
    component: SkillDetailComponent
  },
  {
    path: 'create-skill/:id',
    component: CreateSkillComponent
  },
  {
    path: 'edit-skill/:id',
    component: EditSkillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
