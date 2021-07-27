import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from './myservice.service';

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivate {
  constructor(private service: MyserviceService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('token')) return true;
    this.router.navigate(['']);
    return false;
  }
}
