import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';







@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    CardModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    GalleriaModule,
  
  ],
})
export class PrimeNgModule { }
