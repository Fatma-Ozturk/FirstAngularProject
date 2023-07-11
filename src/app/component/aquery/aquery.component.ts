import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aquery',
  template: `A`
})
export class AqueryComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe({
      next: queryStringParam => console.log("queryStringParam", queryStringParam.get("x"))
    })
  }

}
