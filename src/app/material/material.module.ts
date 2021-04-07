import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'; 


const Material = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  imports: [
    Material
  ],
  exports: [
    Material
  ]
})
export class MaterialModule { }
