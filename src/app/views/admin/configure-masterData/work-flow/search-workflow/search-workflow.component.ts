import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../../admins.service';
import { Globals } from 'src/app/globals/globals';
import { Region, Country, Location, Role } from 'src/app/models/master-data.model';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DisplayColumn, UserInfo } from 'src/app/models/common.model';

const ELEMENT_DATA: any[] = [
  {
    id: 1,
    requestType: 'Indirect',
    description: 'Group Purchasing America',
    minThreshold: '100,000',
    maxThreshold: '500,000',
    region: 'NA',
    country: 'USA',
    location: 'All',
    workgroups: 'WG_Managers, WG_Sr. Managers, WG_VPs'
  },
  {
    id: 2,
    requestType: 'Indirect',
    description: 'Group Purchasing America',
    minThreshold: '100,000',
    maxThreshold: '500,000',
    region: 'NA',
    country: 'USA',
    location: 'All',
    workgroups: 'WG_Managers, WG_Sr. Managers, WG_VPs'
  },
  {
    id: 3,
    requestType: 'Indirect',
    description: 'Group Purchasing America',
    minThreshold: '100,000',
    maxThreshold: '500,000',
    region: 'NA',
    country: 'USA',
    location: 'All',
    workgroups: 'WG_Managers, WG_Sr. Managers, WG_VPs'
  }
];


@Component({
  selector: 'app-search-workflow',
  templateUrl: './search-workflow.component.html',
  styleUrls: ['./search-workflow.component.scss']
})
export class SearchWorkflowComponent implements OnInit {

  dataSource;
  isAdmin = false;

  columnsToDisplay = ['id', 'description', 'requestType', 'minThreshold', 'maxThreshold', 'region', 'country', 'location', 'workgroups', 'action'];
  columnsToDisplayObjects: DisplayColumn[] = [
    { ColumnCode: 'id', ColumnName: 'Id' },
    { ColumnCode: 'description', ColumnName: 'Description' },
    { ColumnCode: 'requestType', ColumnName: 'Request Type' },
    { ColumnCode: 'minThreshold', ColumnName: 'Min Threshold' },
    { ColumnCode: 'maxThreshold', ColumnName: 'Max Threshold' },
    { ColumnCode: 'region', ColumnName: 'Region' },
    { ColumnCode: 'country', ColumnName: 'Country' },
    { ColumnCode: 'location', ColumnName: 'Location' },
    { ColumnCode: 'workgroups', ColumnName: 'Workgroups' },
    { ColumnCode: 'action', ColumnName: 'Action' }
  ];
  selectedUsers: UserInfo[] = [];

  searchMaster: string;
  public fieldArray: Array<any> = [];
  private newAttribute: any = {};
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, public globals: Globals, public adminService: AdminService) { }

  ngOnInit() {
    this.isAdmin = this.globals.isAdmin;
    //this.getWorkFlows();
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Get List of all Active Announcements */
  getWorkFlows() {
    this.adminService.getWorkflows().subscribe(
      (data) => {
        // this.dataSource = new MatTableDataSource(data);
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      });
  }

  /** Get Selected User from the Employee Search component */
  getSelectedUser(users: UserInfo[]) {
    this.selectedUsers = users;
    this.createAdmin(this.selectedUsers);
  }

  /** Get List of all Active Announcements */
  getWorkgroups() {
    this.adminService.getWorkgroups().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      });
  }

  /** Create Admin */
  createAdmin(selectedUsers) {

  }

  /** Delete Admin */
  deleteAdmin(admin) {

  }

  applyFilterMaster() {
    this.dataSource.filter = this.searchMaster.trim().toLowerCase();
  }

}
