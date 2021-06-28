import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curricula } from '../models/curricula.model';
import { ApiService } from './api.service';

@Injectable()
export class CurriculaService {
  readonly path = 'curricula';

  constructor(private api: ApiService) { }

  getAll(): Observable<Curricula[]> {
    return this.api.get(this.path)
  }

  get(id: string): Observable<Curricula> {
    return this.api.get(`${this.path}/${id}`)
  }

  post(curricula: Curricula): Observable<Curricula> {
    return this.api.post(this.path, curricula)
  }

  put(id: string, curricula: Curricula): Observable<Curricula> {
    return this.api.put(`${this.path}/${id}`, curricula)
  }

  delete(id: string): Observable<Curricula> {
    return this.api.delete(`${this.path}/${id}`)
  }
}
