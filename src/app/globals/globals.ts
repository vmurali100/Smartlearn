import { Injectable } from '@angular/core';
import { UserInfo } from '../models/common.model';

@Injectable()
export class Globals {
  public LoggedInUser: UserInfo;
  public isAdmin: boolean;
}

