import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate  {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  public static podeAcessar = false;

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!AutenticacaoGuard.podeAcessar) {
      this.router.navigateByUrl('login');
    }
    return AutenticacaoGuard.podeAcessar;
    
      return true;
  }
}
