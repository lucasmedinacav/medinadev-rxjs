import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationOperatorsRoutingModule } from './creation-operators-routing.module';
import { OfComponent } from './of/of.component';
import { EmptyComponent } from './empty/empty.component';


@NgModule({
  declarations: [OfComponent, EmptyComponent],
  imports: [
    CommonModule,
    CreationOperatorsRoutingModule
  ]
})
export class CreationOperatorsModule { }
