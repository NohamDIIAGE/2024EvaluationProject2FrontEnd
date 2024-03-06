// event.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Event } from '../model/event';
import { EventDtoUp } from '../model/eventDtoUp';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = 'Events'; // URL vers l'API AzureFunction

  constructor(private http: HttpClient) { }

  /** Obtenir les événements depuis le serveur */
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.apiUrl}${this.eventsUrl}`);
  }

  /** Supprimer un événement */
  deleteEvent(eventId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}${this.eventsUrl}/${eventId}`);
  }

  /** Créer un événement */
  createEvent(eventDto: EventDtoUp): Observable<Event> {
    return this.http.post<Event>(`${environment.apiUrl}${this.eventsUrl}`, eventDto);
  }

  /** Créer un DTO pour la création ou la mise à jour d'un événement */
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
