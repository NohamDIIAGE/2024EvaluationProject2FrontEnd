// create-event.component.ts

import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  eventDto: any = {};

  constructor(private eventService: EventService) { }

  createEvent(): void {
    // Créer l'événement en utilisant le service
    this.eventService.createEvent(this.eventDto).subscribe(() => {
      // Réinitialiser le formulaire après la création réussie
      this.eventDto = {};
      // Rediriger vers la liste des événements
      // Vous pouvez implémenter la redirection selon vos besoins
    });
  }

}
