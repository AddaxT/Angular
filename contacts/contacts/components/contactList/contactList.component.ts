import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contactService';
import { Contact } from '../../dto/contact';

@Component({
    selector: 'contactList',
    templateUrl: 'contacts/components/contactList/contactList.component.html'
})
export class ContactListComponent implements OnInit {
    contacts: Contact[];
    constructor(private router: Router, private contactService: ContactService) {
    }

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts(): void {
        this.contactService.getContacts()
            .subscribe(contacts => this.contacts = contacts, this.handleException);
    }

    deleteContact(contact: Contact): void {
        this.contactService.deleteContact(contact.ID)
            .subscribe(data => alert('Contacto eliminado'), this.handleException);
    }

    onSelect(contact: Contact): void {
        this.router.navigate(['/contact', contact.ID]);
    }

    handleException(err: any) {
        console.log('Ocurrió un error', err);
    }
}