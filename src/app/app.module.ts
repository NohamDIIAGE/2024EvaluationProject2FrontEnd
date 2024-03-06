import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importez le module HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventComponent } from './event/event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventComponent,
    DeleteEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
