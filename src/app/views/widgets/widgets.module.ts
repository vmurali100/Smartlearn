import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CartModule } from './cart/cart.module';
import { MatSelectSearchModule } from './mat-select-search/mat-select-search.module';
import { GenericFormModule } from './generic-form/generic-form.module';
import { EmployeeSearchModule } from './employee-search/employee-search.module';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectSearchModule,
    CartModule,
    EmployeeSearchModule
  ],
  providers: [],
  exports: [
    MatDialogModule,
    CartModule,
    MatSelectSearchModule,
    EmployeeSearchModule
  ]
})
export class WidgetsModule {

}
