import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(SidenavComponent, { static: false }) sidenav: any;

  constructor() { }
}
