import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showAddTicket: boolean = false;

  showTicket(){
    this.showAddTicket = !this.showAddTicket;
    console.log(this.showAddTicket);
  }
}
