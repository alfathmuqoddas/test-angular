import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class Posts {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts() {
    return httpResource<IPost[]>(() => this.apiUrl);
  }

  getPostById(id: () => string | undefined) {
    return httpResource<IPost>(() => `${this.apiUrl}/${id()}`);
  }
}
