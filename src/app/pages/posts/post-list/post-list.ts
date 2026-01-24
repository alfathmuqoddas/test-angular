import { Component, inject } from '@angular/core';
import { Posts } from '../../../service/posts/posts';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-list.html',
})
export class PostList {
  private postService = inject(Posts);
  posts$ = this.postService.getPosts();
}
