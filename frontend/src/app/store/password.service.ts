import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PasswordService {
    private prefix: string = "/api/password";

    constructor(
        private http: HttpClient
    ) {

    }

    public getPassword() {
        return this.http.get(`http://localhost:3000${this.prefix}`);
    }

    public generatePassword(data: any) {
        return this.http.post(`http://localhost:3000${this.prefix}`, data);
    }
}