import { Component } from '@angular/core';

@Component({
  styleUrls: ['./app.component.css'],
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
   <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
 `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
