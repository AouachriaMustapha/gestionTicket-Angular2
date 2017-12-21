import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticketservice.service';
import { ticket } from '../models/ticket.model';

@Component({
    selector: 'list-tickets',
    templateUrl: '../views/list.tickets.component.html'
})
export class ListTicketsComponent implements OnInit {

    submittedTicket: ticket;
    detailTicket: ticket;

    constructor(private ticketService: TicketService){

    }

    ngOnInit(){
        this.submittedTicket = new ticket();
    }
    
    SaveTicket($event){
        event.preventDefault();
        this.ticketService.addTicket(this.submittedTicket, this.ticketService.tickets);
        this.submittedTicket = new ticket();
    }
    
    getDetail(ticket: ticket) {
        this.detailTicket = ticket;
    }
}
