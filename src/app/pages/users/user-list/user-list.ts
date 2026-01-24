import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Users } from '../../../service/users/users';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.html',
})
export class UserList {
  private userService = inject(Users);
  users$ = this.userService.getUsers();
}
