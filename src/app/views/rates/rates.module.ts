import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RatesComponent } from './rates.component';
import { RatesRoutingModule } from './rates-routing.module';

@NgModule({
  imports: [
  	FormsModule,
  	CommonModule,
    RatesRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [ 
	  RatesComponent,
  ]
})
export class RatesModule { }