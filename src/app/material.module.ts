import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgModule } from '@angular/core';

const MATERIAL = [
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatRadioModule, 
    MatSelectModule, 
    MatCheckboxModule,
    MatDatepickerModule
];

@NgModule({
    imports:MATERIAL,
    exports:MATERIAL
})
export class MaterialModule {}