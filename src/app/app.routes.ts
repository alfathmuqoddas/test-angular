import { Routes } from '@angular/router';
import { UserList as UserListComponent } from './pages/users/user-list/user-list';
import { AddUser as AddUserComponent } from './pages/users/add-user/add-user';
import { UserDetail as UserDetailComponent } from './pages/users/user-detail/user-detail';
import { PostList } from './pages/posts/post-list/post-list';
import { PostDetail } from './pages/posts/post-detail/post-detail';
import { Home } from './pages/home/home';
import { NotFound as PageNotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  // 1. Home Page
  { path: '', component: Home },

  // 2. Users - SPECIFIC paths must come before DYNAMIC paths
  { path: 'users/add', component: AddUserComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:userId', component: UserDetailComponent },

  // 3. Posts
  { path: 'posts', component: PostList },
  { path: 'posts/:postId', component: PostDetail },
  { path: '**', component: PageNotFoundComponent },
];
