import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

export class CustomStrategy implements PreloadingStrategy {
	preload(route: Route, fn: () => Observable<any>): Observable<any>{
		//custome preloading true
		//deneme preloading false
		if (route.data && route.data["preload"] == true){
			return fn();
		}else{
			return of();
		}

	}

}