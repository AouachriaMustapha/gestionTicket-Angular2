import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TicketService } from '../services/ticketservice.service';
import { ticket } from '../models/ticket.model';

@Component({
    selector: 'ticket',
    templateUrl: '../views/ticket.component.html'
})
export class TicketComponent {

    @Input() ticket;
    detail: ticket;
    
    constructor(private ticketservice: TicketService){

    }
   

    showDetails(){
        if (this.ticket != undefined){
            this.detail = this.ticket;
        }   
    }

    deleteElementFunc(){
        this.ticketservice.deleteElement(this.ticket, this.ticketservice.tickets);
    }
}
