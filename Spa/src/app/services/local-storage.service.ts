import { Injectable, Inject } from '@angular/core';
import { LocalStorage } from './../models/local-storage';
import { retry } from 'rxjs/operator/retry';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalStorageService {
    constructor(
        @Inject(LocalStorage) private localStorage: any) { }
    public clear() {
        this.localStorage.clear();
    }

    public get authToken(): string {
        const data = this.localStorage.getItem('auth_token');
        return ((data) ? data : '');
    }

    public set authToken(value: string) {
        this.localStorage.setItem('auth_token', value);
        console.log(value + '    ' + this.localStorage.getItem('auth_token'));
    }

    public authTokenClean() {
        this.localStorage.removeItem('auth_token');
    }
}
