import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE } from '../config/constants';
import { UserModel } from './authentication.models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  signup(UserModel: UserModel) {
    return this.http.post(`${API_BASE}/users`, UserModel);
  }
}
