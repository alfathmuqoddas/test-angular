import { Component, inject, input } from '@angular/core';
import { UsersService } from '../../../service/users/users';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
})
export class UserDetail {
  private userService = inject(UsersService);

  userId = input.required<string>();

  userReq = this.userService.getUserById(this.userId);
}
