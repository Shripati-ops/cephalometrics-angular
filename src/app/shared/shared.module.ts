import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DialogModule } from "primeng/dialog";
import {SplitButtonModule} from 'primeng/splitbutton';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    DialogModule,
    SplitButtonModule
  ],

  exports : [
    CommonModule,
    MatCardModule,
    MatIconModule,
    DialogModule,
    SplitButtonModule
  ]
})
export class SharedModule { }
