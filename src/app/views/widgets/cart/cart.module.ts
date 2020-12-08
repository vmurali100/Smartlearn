import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartComponent } from './cart.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule
    ],
    providers: [],
    exports: [
        CartComponent
    ]
})
export class CartModule {

}
