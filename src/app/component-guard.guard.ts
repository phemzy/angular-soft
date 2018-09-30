import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogComponent } from './blog/blog.component';

export interface DeactivateCompo {
  confirm(): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ComponentGuardGuard implements CanDeactivate<DeactivateCompo> {
  canDeactivate(
    component: DeactivateCompo,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.confirm();
  }
}
