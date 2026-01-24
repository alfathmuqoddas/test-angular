import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Users } from '../../../service/users/users';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.html',
})
export class UserDetail {
  private route = inject(ActivatedRoute);
  private userService = inject(Users);

  user$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const userId = Number(params.get('userId'));
      return this.userService.getUserById(userId);
    }),
  );
}
