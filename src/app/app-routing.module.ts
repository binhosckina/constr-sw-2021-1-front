import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBuildingComponent } from './create-building/create-building.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { EditBuildingComponent } from './edit-building/edit-building.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { PredioDetalheComponent } from './predio-detalhe/predio-detalhe.component';
import { PrediosComponent } from './predios/predios.component';
import { RoomComponent } from './room/room.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
