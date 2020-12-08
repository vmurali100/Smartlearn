import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserInfo } from 'src/app/models/common.model';
import { user_data } from 'src/app/data/master-data';

@Injectable({
  providedIn: 'root'
})

export class EmployeeSearchService {
  constructor(private httpClient: HttpClient) { }

  /** Fetch LDAP Users */
  fetchLdapUser(reqdData) {
    //return this.httpClient.get<UserInfo[]>('../../../assets/json/ldap-user.json');
    return of(user_data);
  }
}
