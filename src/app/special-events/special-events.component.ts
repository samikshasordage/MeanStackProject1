import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html'
})
export class SpecialEventsComponent implements OnInit 
{  
  specialEvents = []

  constructor(private _eventService: EventService,
              private _router: Router) { }

              ngOnInit() {
                this._eventService.getSpecialEvents().subscribe({
                  next: (res: any) => {
                    this.specialEvents = res
                  },
                  error: (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                      if (err.status === 401) {
                        this._router.navigate(['/login']);
                      }
                    }
                  }
                });
              }
            }
            