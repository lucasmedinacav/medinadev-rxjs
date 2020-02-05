import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { SidenavComponent } from './sidenav/sidenav.component';


// import { MatToolbarModule } from '@angular/material/toolbar';
const appRoutes: Routes = [
  { path: '', component: MapComponent },
  { path: 'map', component: MapComponent },
  { path: 'filter', component: FilterComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MapComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
