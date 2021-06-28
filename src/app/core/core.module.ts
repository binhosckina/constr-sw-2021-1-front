import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { BuildingService } from './services/building.service';
import { RoomService } from './services/room.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    BuildingService,
    RoomService
  ]
})
export class CoreModule { }
