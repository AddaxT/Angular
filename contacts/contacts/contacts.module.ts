import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { MainWindowComponent } from './components/mainWindow/mainWindow.component';
import { ContactListComponent } from './components/contactList/contactList.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ContactService } from './services/contactService';
import { ContactModificationComponent } from './components/contactModification/contactModification.component';

const routes: Routes = [
    { path: '', redirectTo: '/contactList', pathMatch: 'full' },
    { path: 'contactList', component: ContactListComponent },
    { path: 'contact', component: ContactModificationComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true }), HttpModule, FormsModule],
    declarations: [MainWindowComponent, ContactListComponent, MenuBarComponent, ContactModificationComponent],
    providers: [ContactService],
    bootstrap: [MainWindowComponent]
})
export class AppModule {
}