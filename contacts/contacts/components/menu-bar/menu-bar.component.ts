import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
    selector: 'menu-bar',
    providers: [
    ],
    templateUrl: 'contacts/components/menu-bar/menu-bar.component.html'
})
export class MenuBarComponent implements OnInit {

    private sub: any;
    token: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.sub = this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setTokenFromPathComponents(val.urlAfterRedirects.split('/'));
            }
        });
        this.setTokenFromPathComponents(window.location.hash.split('/'));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private setTokenFromPathComponents(pathComponents: string[]) {
        if (pathComponents.length > 2) {
            this.token = pathComponents[2];
        } else {
            this.token = null;
        }
    }

    collapseMenu() {
    }
}