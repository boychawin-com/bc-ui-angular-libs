import { Injectable } from '@angular/core';
import moment from 'moment';
import { HEADER_X_API_REQUEST_ID } from '../core/constants';
import { CookieService } from '../service/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(
    private cookieService: CookieService
  ) { }

  createRequestId(): ApiRequestService {
    this.cookieService.set(HEADER_X_API_REQUEST_ID, this.genRequestId(), undefined, '/');
    return this;
  }

  getCurrentRequestId(): string {
    return this.cookieService.get(HEADER_X_API_REQUEST_ID);
  }

  private genRequestId(): string {
    return (moment().format('YYYYMMDDHHmmssSSS') + this.padLeft(Math.floor(Math.random() * 10000 - 1), 4));
  }

  private padLeft(nr: number, n: number, str?: any): string {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
  }
}
