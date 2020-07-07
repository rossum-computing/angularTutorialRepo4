import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {MatTableModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material/';
import { MobilesService } from './mobiles.service';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [
    MobilesService
  ]
})
export class SharedModule { }
