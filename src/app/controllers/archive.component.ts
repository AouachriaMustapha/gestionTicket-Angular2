import { Component, OnInit } from '@angular/core';
import { ticket } from '../models/ticket.model';
import { ArchiveService } from '../services/archive.service';
@Component({ 
    selector: 'archive',
    templateUrl: '../views/archive.component.html'
})
export class ArchiveComponent implements OnInit {
    
    tickets: ticket[] = [];

    constructor(private archiveService: ArchiveService){

    }
    
    ngOnInit(){
        this.archiveService.getListTickets()
            .subscribe(res => {
                this.tickets = res;
            });
    }
}
