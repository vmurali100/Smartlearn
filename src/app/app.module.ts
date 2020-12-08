import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  AppHeaderModule,
  AppSidebarModule,
  AppFooterModule,
} from '@coreui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard/dashboard.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkColumnDef } from '@angular/cdk/table';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { P404Component } from './views/p404/p404.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { LoginComponent } from './views/login/login.component';
import { SearchPipe } from './filters/search.pipe';
import { CommonModule, DatePipe } from '@angular/common';
import { DefaultLayoutComponent, TutorialsDialog, HelpDialog } from './container/default-layout';
import { Globals } from './globals/globals';
import { GenericCreateRequestComponent } from './views/generic/generic-create-request/generic-create-request.component';
import { GenericReportComponent } from './views/generic/generic-report/generic-report.component';
import { GenericReportFormComponent } from './views/widgets/generic-report-form/generic-report-form.component';
import { InputComponent } from './views/widgets/generic-form/components/input/input.component';
import { ButtonComponent } from './views/widgets/generic-form/components/button/button.component';
import { SelectComponent } from './views/widgets/generic-form/components/select/select.component';
import { DateComponent } from './views/widgets/generic-form/components/date/date.component';
import { RadiobuttonComponent } from './views/widgets/generic-form/components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './views/widgets/generic-form/components/checkbox/checkbox.component';
import { TextAreaComponent } from './views/widgets/generic-form/components/textarea/textarea.component';
import { DynamicFieldDirective } from './views/widgets/generic-form/components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './views/widgets/generic-form/components/dynamic-form/dynamic-form.component';
import { MultiSelectComponent } from './views/widgets/generic-form/components/multiselect/multiselect.component';
import { KendoFileUploadComponent } from './views/widgets/generic-form/components/kendofileupload/kendofileupload.component';
import { UploadsModule, UploadModule } from '@progress/kendo-angular-upload';
import { GridModule } from '@progress/kendo-angular-grid';
import '@progress/kendo-ui';
import { CoursedetailsComponent } from './views/course/coursedetails/coursedetails.component';
import { QuizComponent } from './quiz/quiz.component';
import { CountdownModule, CountdownGlobalConfig, CountdownConfig } from 'ngx-countdown';
import { DragDropModule } from '@angular/cdk/drag-drop';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];
@NgModule({
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    DashboardComponent,
    P404Component,
    ComingSoonComponent,
    LoginComponent,
    SearchPipe,
    GenericCreateRequestComponent,
    GenericReportComponent,
    GenericReportFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextAreaComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    MultiSelectComponent,
    KendoFileUploadComponent,
    HelpDialog,
    TutorialsDialog,
    CoursedetailsComponent,
    QuizComponent
  ],
  imports: [
    // NgxChartsModule,
    BrowserModule,
    CommonModule,
    GridModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AppHeaderModule,
    MatIconModule,
    AppSidebarModule,
    AppFooterModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatListModule,
    MatAutocompleteModule,
    MatExpansionModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule,
    UploadModule,
    UploadsModule,
    CountdownModule,
    DragDropModule
  ],
  exports: [
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatListModule,
    MatAutocompleteModule,
    DragDropModule
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextAreaComponent,
    GenericReportFormComponent
  ],
  providers: [
    CdkColumnDef,
    DatePipe,
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
