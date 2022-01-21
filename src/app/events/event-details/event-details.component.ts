import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .containr { padding: 0px 20px; }
    .event-image { height: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: Event;

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }
}
