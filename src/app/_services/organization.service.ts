import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organization } from '../_models/organization';
import { Observable } from 'rxjs';
 const baseUrl = 'https://firstappwithpostgree.herokuapp.com/api/Organizations';
 //  const baseUrl = 'https://localhost:44305/api/Organizations';


@Injectable({ providedIn: 'root' })
export class OrganizationService {
    constructor(private http: HttpClient) { }

    getAll(){
         return this.http.get<Organization[]>(baseUrl);

    }

    getById(id: number) {
        return this.http.get<Organization>(`${baseUrl}/${id}`);
    }

    create(params: any) {
        return this.http.post(baseUrl, params);
    }

    update(id: number, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    delete(id: number) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}

