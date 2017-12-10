import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Response } from '@angular/http/src/static_response';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService {

    isLoading = false;
    currentUser: any;

    constructor(
        private tokenService: Angular2TokenService
    ) { }

    signIn(value: any) {
        this.isLoading = true;
        return this.tokenService.signIn(value)
            .catch((error: any, caught: Observable<Response>) => {
                this.isLoading = false;
                return error;
            })
            .map((response: Response) => {
                this.isLoading = false;
                return response;
            });
    }

    GET<T>(url: string, parameters?: string, options: any = null) {
        this.isLoading = true;
        return this.tokenService.get(`${url}`, options)
            .catch((error: any, caught: Observable<Response>) => {
                this.isLoading = false;
                return error;
            })
            .map((res: Response) => {
                this.isLoading = false;
                return <T>res.json();
            });
    }

    POST<T>(url: string, body: any, options: any = null) {
        this.isLoading = true;
        return this.tokenService.post(`${url}`, body, options)
            .catch((error: any, caught: Observable<Response>) => {
                this.isLoading = false;
                return error;
            })
            .map((res: Response) => {
                this.isLoading = false;
                return <T>res.json();
            });
    }

    DELETE(url: string, options: any = null) {
        this.isLoading = true;
        return this.tokenService.delete(`${url}`, options)
            .catch((error: any, caught: Observable<Response>) => {
                this.isLoading = false;
                return error;
            })
            .map((res: Response) => {
                this.isLoading = false;
                return res.json();
            });
    }

    PUT(url: string, body: any, options: any = null) {
        this.isLoading = true;
        return this.tokenService.put(`${url}`, body, options)
            .catch((error: any, caught: Observable<Response>) => {
                this.isLoading = false;
                return error;
            })
            .map((res: Response) => {
                this.isLoading = false;
                return res.json();
            });
    }

    PATCH(url: string, body: any, options: any = null) {
        this.isLoading = true;
        return this.tokenService.patch(`${url}`, body, options)
            .catch((error: any, caught: Observable<Response>) => {
                this.isLoading = false;
                return error;
            })
            .map((res: Response) => {
                this.isLoading = false;
                return res.json();
            });
    }
}
