import { Component, inject } from '@angular/core';
import { Posts } from '../../../service/posts/posts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.html',
})
export class PostList {
  private postService = inject(Posts);
  postsReq = this.postService.getPosts();
}
