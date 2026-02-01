import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../../service/users/users';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
})
export class UserList {
  private userService = inject(UsersService);

  usersReq = this.userService.getUsers();
}
