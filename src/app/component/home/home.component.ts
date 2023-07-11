import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `Home`
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute){
    const hasId = this.activatedRoute.snapshot.paramMap.has("id");
    console.log("hasId", hasId);
    const hasFatma = this.activatedRoute.snapshot.paramMap.has("fatma");
    console.log("hasFatma", hasFatma);
    const fatma: any = this.activatedRoute.snapshot.paramMap.get("fatma");
    console.log("fatma", fatma);

   // Observable Kullanarak Url Parametresi Okuma
    activatedRoute.paramMap.subscribe({
      next: param => console.log("fatmaParamMap", param.get("fatma"))
    })

    activatedRoute.params.subscribe({
      next: param => console.log("fatmaParams", param["fatma"])
    })
  }

}
