import { Component, inject, input, resource, ChangeDetectionStrategy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Users } from '../../../service/users/users';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetail {
  private userService = inject(Users);

  userId = input.required({ transform: (v: string) => Number(v) });

  userResource = resource({
    request: () => ({ id: this.userId() }),
    loader: ({ request }) => this.userService.getUserById(request.id),
  });
}
