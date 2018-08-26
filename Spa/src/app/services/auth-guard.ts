import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private localStorageService: LocalStorageService) { }

    canActivate() {
        if (!this.localStorageService.authToken) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
