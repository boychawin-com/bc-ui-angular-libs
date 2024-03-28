import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiRequestService } from '../helpers/api-request.service';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestGuard implements CanActivate {
  constructor(
    private apiRequestService: ApiRequestService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.apiRequestService.createRequestId();
    return true;
  }
}
