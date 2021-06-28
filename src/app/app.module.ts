import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrediosComponent } from './predios/predios.component';
import { PredioDetalheComponent } from './predio-detalhe/predio-detalhe.component';
import { CoreModule } from './core/core.module'
import { CreateBuildingComponent } from './create-building/create-building.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBuildingComponent } from './edit-building/edit-building.component';
import { RoomComponent } from './room/room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { CurriculaListComponent } from './curricula/curricula-list/curricula-list.component';
import { CurriculaDetailComponent } from './curricula/curricula-detail/curricula-detail.component';
import { CreateCurriculaComponent } from './curricula/create-curricula/create-curricula.component';
import { EditCurriculaComponent } from './curricula/edit-curricula/edit-curricula.component';
import { SkillDetailComponent } from './skill/skill-detail/skill-detail.component';
import { EditSkillComponent } from './skill/edit-skill/edit-skill.component';
import { CreateSkillComponent } from './skill/create-skill/create-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    PrediosComponent,
    PredioDetalheComponent,
    CreateBuildingComponent,
    EditBuildingComponent,
    RoomComponent,
    EditRoomComponent,
    CreateRoomComponent,
    CurriculaListComponent,
    CurriculaDetailComponent,
    CreateCurriculaComponent,
    EditCurriculaComponent,
    SkillDetailComponent,
    EditSkillComponent,
    CreateSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
