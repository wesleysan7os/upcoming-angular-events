import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent {
  title = 'upcoming-angular-events';
}
