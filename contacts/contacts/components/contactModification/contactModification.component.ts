import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../../services/contactService';
import { Contact } from '../../dto/contact';

@Component({
    selector: 'contactList',
    templateUrl: 'contacts/components/contactModification/contactModification.component.html'
})
export class ContactModificationComponent implements OnInit {

    contact: Contact;
    update: boolean;

    constructor(private route: ActivatedRoute, private location: Location, private contactService: ContactService) {
        this.contact = new Contact();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id) {
                this.contactService.getContactById(id)
                    .subscribe(contact => { this.contact = contact; this.update = true; });
            }
        });
    }

    save(): void {
        this.contactService.updateContact(this.contact)
            .subscribe(data => alert('Contacto modificado'), this.handleException);
    }

    goBack(): void {
        this.location.back();
    }

    handleException(err: any) {
        console.log('Ocurrió un error', err);
    }
}