import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class SkillService {
  readonly path = environment.skill_path;

  constructor(private api: ApiService) { }

  getAll(): Observable<Skill[]> {
    return this.api.get(this.path)
  }

  get(id: string): Observable<Skill> {
    return this.api.get(`${this.path}/${id}`)
  }

  post(skill: Skill): Observable<Skill> {
    return this.api.post(this.path, skill)
  }

  patch(skill: Skill): Observable<Skill> {
    return this.api.patch(`${this.path}`, skill)
  }

  delete(id: string): Observable<Skill> {
    return this.api.delete(`${this.path}/${id}`)
  }
}
