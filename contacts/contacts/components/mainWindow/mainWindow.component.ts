import { Component } from '@angular/core';

@Component({
    selector: 'contacts',
    templateUrl: 'contacts/components/mainWindow/mainWindow.component.html'
})
export class MainWindowComponent {
    name: string;
    constructor() {
        this.name = 'Angular 2';
    }
}