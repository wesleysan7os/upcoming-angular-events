import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../commom/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <app-event-thumbnail (click)=handleThumbnailClick(event.name) [event]="event"></app-event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(
    private eventService: EventService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string): void {
    this.toastr.success(eventName);
  }
}
