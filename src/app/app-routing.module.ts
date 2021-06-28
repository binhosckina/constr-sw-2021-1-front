import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBuildingComponent } from './create-building/create-building.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { CreateCurriculaComponent } from './curricula/create-curricula/create-curricula.component';
import { CurriculaDetailComponent } from './curricula/curricula-detail/curricula-detail.component';
import { CurriculaListComponent } from './curricula/curricula-list/curricula-list.component';
import { EditCurriculaComponent } from './curricula/edit-curricula/edit-curricula.component';
import { EditBuildingComponent } from './edit-building/edit-building.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { PredioDetalheComponent } from './predio-detalhe/predio-detalhe.component';
import { PrediosComponent } from './predios/predios.component';
import { RoomComponent } from './room/room.component';
import { CreateSkillComponent } from './skill/create-skill/create-skill.component';
import { EditSkillComponent } from './skill/edit-skill/edit-skill.component';
import { SkillDetailComponent } from './skill/skill-detail/skill-detail.component';

const routes: Routes = [
  {
    path: 'building',
    component: PrediosComponent
  },
  {
    path: 'building/:id',
    component: PredioDetalheComponent
  },
  {
    path: 'create-building',
    component: CreateBuildingComponent
  },
  {
    path: 'edit-building/:id',
    component: EditBuildingComponent
  },
  {
    path: 'room/:id',
    component: RoomComponent
  },
  {
    path: 'create-room',
    component: CreateRoomComponent
  },
  {
    path: 'edit-room/:id',
    component: EditRoomComponent
  },
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
