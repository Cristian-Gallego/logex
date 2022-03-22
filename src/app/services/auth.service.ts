import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth: boolean = false;
  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  login(email: String, password: String): Observable<String> {
    /* I would never send plaintext passwords to the server for auth purposes.
    However, reqres.in stores them that way, so there's nothing I can do.
    Instead, I'd send a salted SHA-256 hash and compare it to the hashed password stored in the backend. */
    return this.http.post<String>(`${this.apiUrl}/login`, {
      email: email,
      password: password,
    });
  }

  authenticateUser(): boolean {
    this.isAuth = true;
    return this.isAuth;
  }

  removeAuth(): boolean {
    this.isAuth = false;
    return this.isAuth;
  }
}
