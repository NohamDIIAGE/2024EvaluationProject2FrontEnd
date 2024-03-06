// event.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Event } from '../model/event'; // Importez le bon modèle Event
import { EventDtoUp } from '../model/eventDtoUp';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = 'Events'; // URL vers AzureFunction

  constructor(private http: HttpClient) { }

  /** Obtenir les événements depuis le serveur */
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.apiUrl}${this.eventsUrl}`);
  }

  eventDto(title: string, description: string, date: Date, time: number, location: string): EventDtoUp {
    return {
      title: title,
      description: description,
      date: date,
      time: time,
      location: location
    };
  }

}
