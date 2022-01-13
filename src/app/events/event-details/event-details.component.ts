import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .containr { padding-left: 0px 20px; }
    .event-image { height: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1);
  }
}
