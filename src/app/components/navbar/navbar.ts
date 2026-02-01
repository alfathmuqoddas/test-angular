import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly links = signal<{ name: string; link: string }[]>([
    { name: 'Home', link: '/' },
    { name: 'Users', link: '/users' },
    { name: 'Posts', link: '/posts' },
  ]);
}
