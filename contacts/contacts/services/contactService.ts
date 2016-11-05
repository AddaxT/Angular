import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Contact } from '../dto/contact';

@Injectable()
export class ContactService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private contactsUrl = 'http://localhost:3000/';

    constructor(private http: Http) { }

    getContacts(): Observable<Contact[]> {
        return this.http
            .get(this.contactsUrl + 'contacts')
            .map((r: Response) => r.json().data as Contact[]);
    }

    getContactById(contactId: string): Observable<Contact> {
        return this.http
            .get(this.contactsUrl + 'contact/' + contactId)
            .map((r: Response) => r.json().data as Contact);
    }

    createContact(contact: Contact): Observable<Contact> {
        return this.http
            .post(this.contactsUrl + 'contact', JSON.stringify(contact), { headers: this.headers })
            .map((r: Response) => r.json().data);
    }

    updateContact(contact: Contact): Observable<Contact>{
        return this.http
            .put(this.contactsUrl + 'contact', JSON.stringify(contact), { headers: this.headers })
            .map((r: Response) => r.json().data);
    }

    deleteContact(contactId: string): Observable<Contact> {
        return this.http
            .delete(this.contactsUrl + 'contact/' + contactId)
            .map((r: Response) => r.json().data);
    }
}