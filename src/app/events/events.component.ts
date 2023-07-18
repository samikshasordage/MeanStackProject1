import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit 
{

  events = []
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe({
      next: res => {
        this.events = res;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
