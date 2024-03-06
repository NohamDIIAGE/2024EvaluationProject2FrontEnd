import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(
      events => {
        this.events = events;
      },
      error => {
        console.error('Erreur lors de la récupération des événements :', error);
      }
    );
  }
}
