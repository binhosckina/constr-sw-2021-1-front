import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curricula } from '../models/curricula.model';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class CurriculaService {
  readonly path = environment.curricula_path;

  constructor(private api: ApiService) { }

  getAll(): Observable<Curricula[]> {
    return this.api.get(this.path)
  }

  get(id: string): Observable<Curricula> {
    return this.api.get(`${this.path}/${id}`)
  }

  getSkill(id: string): Observable<Curricula> {
    return this.api.get(`${this.path}/${id}/${environment.skill_path}`)
  }

  post(curricula: Curricula): Observable<Curricula> {
    return this.api.post(this.path, curricula)
  }

  patch(id: string, curricula: Curricula): Observable<Curricula> {
    return this.api.patch(`${this.path}/${id}`, curricula)
  }

  put(id: string, curricula: Curricula): Observable<Curricula> {
    return this.api.put(`${this.path}/${id}`, curricula)
  }

  delete(id: string): Observable<Curricula> {
    return this.api.delete(`${this.path}/${id}`)
  }
}
