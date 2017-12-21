import { Injectable} from '@angular/core';
import { ticket } from '../models/ticket.model'; 

@Injectable()
export class TicketService{

    tickets: ticket[] = [];
    
    addTicket(submittedTicket: ticket, tickets: ticket[]) {
        if (ticket != undefined){
            submittedTicket.id = tickets.length;
            tickets.push(submittedTicket); 
        }
    }

    public deleteElement(element: ticket, tickets: ticket[]){
        if (tickets != undefined){
            const index = tickets.findIndex(x => x == element);
            tickets.splice(index, 1);
        }
    }
}
