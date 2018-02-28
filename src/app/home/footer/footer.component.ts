import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-footer',
    styleUrls: ['footer.component.css'],
    templateUrl: 'footer.component.html'
})

export class FooterComponent implements OnInit {
    routeChange: boolean = false;
    fPosition: string = 'relative';

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe((url:any) => {
            if(url.url === '/home') {
                this.routeChange = true;
                this.fPosition = 'absolute';
            } else {
                this.routeChange = false;
                this.fPosition = 'relative';
            }
        });
    }
}
