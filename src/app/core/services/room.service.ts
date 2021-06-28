import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Room } from 'src/app/core/models/room.model';
import { ApiService } from './api.service';

@Injectable()
export class RoomService {
  readonly path = 'room';

  constructor(private api: ApiService) { }

  getAll(): Observable<Room[]> {
    return this.api.get(this.path)
  }

  get(id: string): Observable<Room> {
    return this.api.get(`${this.path}/${id}`)
  }

  post(room: Room): Observable<Room> {
    return this.api.post(this.path, room)
  }

  put(id: string, room: Room): Observable<Room> {
    return this.api.put(`${this.path}/${id}`, room)
  }

  delete(id: string): Observable<Room> {
    return this.api.delete(`${this.path}/${id}`)
  }
}
