import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../services/index';
import {IMyDpOptions} from "mydatepicker";

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    imageChangedEvent: any = '';

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    myDatePickerOptions: IMyDpOptions = {
        // options for date validation ...
        dateFormat: 'dd.mm.yyyy',
        disableSince: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate()
        }
    };

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(image: string) {
        this.model.thumb = image;
    }

    imageLoaded() {
        console.info('Image Loaded');
    }

    loadImageFailed() {
        console.info('Image loading failed');
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
