import { Component } from '@angular/core';

@Component({
    selector: 'accueil',
    templateUrl: '../views/accueuil.component.html'
})
export class AccueilComponent {
    formShowed: boolean = false;

    showForm(){
        this.formShowed = !this.formShowed;
    }
}
