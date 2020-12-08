import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayColumn, ReportDisplayColumn } from 'src/app/models/common.model';
import { MatDialog } from '@angular/material/dialog';
import { displayedColumnObjectsListReports } from 'src/app/config/create-request.config';

const ELEMENT_DATA: any[] = [
  {
    request: '1', programName: 'Test Program', effectiveOrderer: 'Vinod Manoharan', deadlineDate: '30-Nov-2020', programSOPDate: '12-Sept-2020',
    projectPhase: 'Phase 2-5', customer: 'Ford', region: 'NA', group: 'CG NA',
    techCenter: 'CTU', targetBusinessNo: '089DG12564', forecastPlanningCycle: 'PPL21',
    createdBy: 'amanohvi', createdDate: '12-Sept-2020', productCost: '100,000USD'
  },
  {
    request: '2', programName: 'Test Program1', effectiveOrderer: 'Vinod Manoharan', deadlineDate: '23-Nov-2020', programSOPDate: '02-Jun-2020',
    projectPhase: 'Phase 0', customer: 'BMW', region: 'South America', group: 'CG SA',
    techCenter: 'CTU', targetBusinessNo: '342IKJ3123', forecastPlanningCycle: 'PPL21',
    createdBy: 'amanohvi', createdDate: '12-Sept-2020', productCost: '100,000USD'
  },
  {
    request: '3', programName: 'Test Program3', effectiveOrderer: 'Anish Samuel', deadlineDate: '30-Nov-2020', programSOPDate: '12-Sept-2020',
    projectPhase: 'Phase 1', customer: 'Toyota', region: 'NA', group: 'Fabrics',
    techCenter: 'CTU', targetBusinessNo: '123JGH1310', forecastPlanningCycle: 'PPL20',
    createdBy: 'amanohvi', createdDate: '12-Sept-2020', productCost: '100,000USD'
  },
  {
    request: '4', programName: 'Test Program4', effectiveOrderer: 'Anish Samuel', deadlineDate: '30-Nov-2020', programSOPDate: '12-Sept-2020',
    projectPhase: 'Production Support', customer: 'FCA', region: 'China', group: 'CG AP',
    techCenter: 'CTU', targetBusinessNo: '9875GHJ1123', forecastPlanningCycle: 'PPL20',
    createdBy: 'amanohvi', createdDate: '12-Sept-2020', productCost: '100,000USD'
  }
];

@Component({
  selector: 'app-generic-report',
  templateUrl: './generic-report.component.html',
  styleUrls: ['./generic-report.component.scss']
})
export class GenericReportComponent implements OnInit {

  data: any[];

  displayedColumnObjectsList: ReportDisplayColumn[] = [];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumnObjectsList = displayedColumnObjectsListReports;
    this.data = ELEMENT_DATA;
  }

}
