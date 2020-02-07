import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatListModule,
  MatNativeDateModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const appRoutes: Routes = [
  { path: '', loadChildren: './creation-operators/creation-operators.module#CreationOperatorsModule'},
  {
    path: 'creation-operators',
    loadChildren: './creation-operators/creation-operators.module#CreationOperatorsModule'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
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
    MatExpansionModule,
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
