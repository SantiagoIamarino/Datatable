import { Component, OnInit, OnDestroy } from '@angular/core';

declare function loadScript();
declare function destroyScript();

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    loadScript();
  }

  ngOnDestroy() {
    destroyScript();
  }

}
