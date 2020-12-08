import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DynamicFormComponent } from '../../widgets/generic-form/components/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../widgets/generic-form/field.interface';
import { PageData, CreateRequestData, SectionData } from 'src/app/models/common.model';
import { createFormTab1, createFormTab2, createFormTab3 } from 'src/app/config/create-request.config';


@Component({
  selector: 'app-generic-create-request',
  templateUrl: './generic-create-request.component.html',
  styleUrls: ['./generic-create-request.component.scss']
})
export class GenericCreateRequestComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  data: any[] = [];
  tab1: FieldConfig[] = [];
  tab2: FieldConfig[] = [];
  tab3: FieldConfig[] = [];

  hide1 = true;
  hide2 = true;
  hide3 = false;
  hide4 = true;

  reviewDisplayOrder: any[] = [this.tab1, this.tab2];

  projFiscStartYear: any;
  FYinQuarters: any;

  reviewData: PageData[] = [];

  selected = new FormControl(0);

  submit(value: any, name: string) {
    this.addtoData(value, name);
  }

  submitTab2(value: any, name: string) {
    this.addtoData(value, name);
  }

  resetOptions() {
    this.hide1 = true;
    this.hide2 = true;
    this.hide3 = true;
    this.hide4 = true;
  }

  submitTab3(value: any, name: string) {
    this.addtoData(value, name);
  }

  addtoData(value: any, name: string) {
    let dataExists = this.data.some(crd => crd.name === name);
    if (dataExists) {
      let c: CreateRequestData = this.data.filter(a => a.name === name)[0];
      c.data = value;
    } else {
      let c = new CreateRequestData();
      c.name = name;
      c.data = value;
      this.data.push(c);
    }
  }

  getSectionData1(tab: FieldConfig[], name: string) {

    let pd = new PageData();
    pd.pageName = name;
    let crd: CreateRequestData = this.data.filter(a => a.name === name)[0];

    for (let requestData of tab) {
      let secData = new SectionData();
      secData.displayName = requestData.label;
      secData.name = requestData.name;
      secData.type = requestData.type;
      if (crd !== undefined) {
        secData.value = crd.data[requestData.name];
      }

      pd.data.push(secData);
    }

    let dataExists = this.reviewData.some(rd => rd.pageName === name);
    if (dataExists) {
      let rd = this.reviewData.filter(a => a.pageName === name)[0];
      rd.data = pd.data;
    } else {
      this.reviewData.push(pd);
      console.log(this.reviewData);
    }
  }

  getSectionData() {
    console.log(this.data);
  }

  constructor() {
    this.tab1 = createFormTab1;
    this.tab2 = createFormTab2;
    this.tab3 = createFormTab3;
  }

  ngOnInit(): void {
  }

  navigateToTab(tab: number) {
    this.selected.setValue(tab);
  }


}
