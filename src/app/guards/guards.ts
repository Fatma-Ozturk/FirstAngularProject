import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
	//...bazı işlemler
	console.log('canActivate Guard Tetiklendi');

	return true;
}

export const canActivateChildGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	//...bazı işlemler
	console.log('canActivateChild Guard Tetiklendi');
	return false;
}

export const canDeactivateGuard: CanDeactivateFn<any> = (component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
	//...bazı işlemler
	console.log('canDeactivate Guard Tetiklendi');
	return true;
}

export const resolveGuard: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	//const httpClient = inject(HttpClient);
	//return httpClient.get("http://jsonplaceholder.typicode.com/photos");
	//httpClient deprecated

	console.log('resolveGuard Guard Tetiklendi');	
}

export const isAdminGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
	return !!localStorage.getItem("admin");
}

export const isUserGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
	return !localStorage.getItem("admin");
}
