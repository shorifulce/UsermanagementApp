import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequet } from '../models/loginRequest.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../models/loginResponse.model';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Create a BehaviorSubject to store and manage user information.
  $user = new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  // Login method that sends a POST request to the authentication endpoint.
  login(request: LoginRequet): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/api/Auth/login`, { username: request.username, password: request.password });
  }

  // Set user information in the $user BehaviorSubject and in localStorage.
  setUser(user: User): void {
    this.$user.next(user);
    localStorage.setItem('user-name', user.username);
    localStorage.setItem('user-type', user.userType.toString());
  }

  // Observable method to get the user information.
  user(): Observable<User | undefined> {
    return this.$user.asObservable();
  }

  // Retrieve user information from localStorage.
  getUser(): User | undefined {
    const userName = localStorage.getItem('user-name');
    const usertype = localStorage.getItem('user-type');

    if (userName && usertype) {
      const user: User = {
        username: userName,
        userType: usertype
      };

      return user;
    }

    return undefined;
  }

  // Log out the user by clearing localStorage and removing cookies.
  logout(): void {
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.$user.next(undefined);
  }
}
