import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRoleMap } from 'src/app/models/common.model';
import { HttpClient } from '@angular/common/http';
import { Location, Region, Country, Role } from 'src/app/models/master-data.model';
import { of } from 'rxjs';
import { locations_data } from 'src/app/data/master-data';




@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient: HttpClient) { }

  getAdmins(): Observable<any[]> {
    //return this.httpClient.get<Location[]>('assets/json/userRoles.json');
    return of(locations_data);
  }

  getActiveLocations(): Observable<Location[]> {
    //return this.httpClient.get<Location[]>('../../../assets/json/regions.json');
    return of(locations_data);
  }

  getActiveRegions(): Observable<Region[]> {
    return this.httpClient.get<Region[]>('../../../assets/json/regions.json');
  }

  getActiveCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>('../../../assets/json/countries.json');
  }

  getActiveRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>('../../../assets/json/roles.json');
  }

  getWorkgroups(): Observable<any[]> {
    return this.httpClient.get<any[]>('../../../assets/json/workgroups.json');
  }

  getWorkflows(): Observable<any[]> {
    return this.httpClient.get<any[]>('../../../assets/json/workflows.json');
  }
}
