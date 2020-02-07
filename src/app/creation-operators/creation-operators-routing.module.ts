import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfComponent } from './of/of.component';
import { EmptyComponent } from './empty/empty.component';


const routes: Routes = [
  { path: '', component: OfComponent },
  { path: 'of', component: OfComponent },
  { path: 'empty', component: EmptyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationOperatorsRoutingModule { }
