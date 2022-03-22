import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/interfaces/Users';
import { SingleUserRootObject } from '../interfaces/Single-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<RootObject> {
    return this.http.get<RootObject>(`${this.apiUrl}/users/`);
  }

  getUser(id: number): Observable<SingleUserRootObject> {
    return this.http.get<SingleUserRootObject>(`${this.apiUrl}/users/${id}`);
  }
}
