import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  ipAdress = 'http://192.168.0.102:3000';
  constructor(private http: HttpClient) {}

  new_game_schedule(body: any) {
    return this.http.post(`${this.ipAdress}/games`, body);
  }

  getAllGames() {
    return this.http.get(`${this.ipAdress}/games`);
  }

  loginHandler(body: any) {
    return this.http.post(`${this.ipAdress}/auth/login`, body);
  }

  signUpHandler(body: any) {
    return this.http.post(`${this.ipAdress}/auth/signup`, body);
  }

  logoutHandler() {
    localStorage.removeItem('token');
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;
    return new JwtHelperService().decodeToken(token);
  }
}
