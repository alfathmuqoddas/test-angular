import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return httpResource<IUser[]>(() => this.apiUrl);
  }

  getUserById(id: () => string | undefined) {
    return httpResource<IUser>(() => `${this.apiUrl}/${id()}`);
  }
}
