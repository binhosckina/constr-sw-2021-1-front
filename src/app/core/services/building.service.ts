import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Building } from 'src/app/core/models/building.model';
import { ApiService } from './api.service';

@Injectable()
export class BuildingService {
  readonly path = 'building';

  constructor(private api: ApiService) { }

  getAll(): Observable<Building[]> {
    return this.api.get(this.path)
  }

  get(id: string): Observable<Building> {
    return this.api.get(`${this.path}/${id}`)
  }

  post(building: Building): Observable<Building> {
    return this.api.post(this.path, building)
  }

  put(id: string, building: Building): Observable<Building> {
    return this.api.put(`${this.path}/${id}`, building)
  }

  delete(id: string): Observable<Building> {
    return this.api.delete(`${this.path}/${id}`)
  }
}
