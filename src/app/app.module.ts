import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './controllers/accueil.component';
import { ListTicketsComponent } from './controllers/ListTicketsComponent.component';
import { TicketService } from './services/ticketservice.service';
import { TicketComponent } from './controllers/ticket.component';
import { ArchiveComponent} from './controllers/archive.component';
import { ArchiveService } from './services/archive.service';

const appRoutes: Routes = [
  { path: 'archive', component: ArchiveComponent, pathMatch: 'full' },
  { path: 'tickets', component: AccueilComponent }
];

@NgModule({
  declarations: [
    AppComponent, ListTicketsComponent, TicketComponent, ArchiveComponent, AccueilComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TicketService, ArchiveService
  ],
  bootstrap: [AppComponent],
  exports: [AccueilComponent]
})
export class AppModule { }
