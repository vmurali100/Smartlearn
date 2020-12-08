import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../admins.service';
import { UserInfo, DisplayColumn } from 'src/app/models/common.model';
import { Globals } from 'src/app/globals/globals';
import { Region, Country, Location, Role } from 'src/app/models/master-data.model';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const ELEMENT_DATA: any[] = [
  {
    id: 1,
    name: 'Group Purchasing America',
    code: '403265',
    level: '1',
    description: 'Group Purchasing America',
    region: 'NA',
    country: 'USA',
    location: 'All'
  },
  {
    id: 2,
    name: 'Group Procurment North US',
    code: '403266',
    level: '2',
    description: 'Group Procurment North US',
    region: 'NA',
    country: 'USA',
    location: 'Plymouth, Northwood, Detroit, Ann Harbour'
  },
  {
    id: 3,
    name: 'Group_CIO',
    level: '3',
    code: '403267',
    description: 'Group_CIO',
    region: 'All',
    country: 'All',
    location: 'All'
  }
];


@Component({
  selector: 'app-work-group',
  templateUrl: './work-group.component.html',
  styleUrls: ['./work-group.component.scss']
})
export class WorkGroupComponent implements OnInit {

  dataSource;
  isAdmin = false;

  columnsToDisplay = ['id', 'code', 'level', 'name', 'region', 'country', 'location', 'action'];
  columnsToDisplayObjects: DisplayColumn[] = [
    { ColumnCode: 'id', ColumnName: 'Id' },
    { ColumnCode: 'code', ColumnName: 'Code' },
    { ColumnCode: 'level', ColumnName: 'Level' },
    { ColumnCode: 'name', ColumnName: 'Name' },
    { ColumnCode: 'region', ColumnName: 'Region' },
    { ColumnCode: 'country', ColumnName: 'Country' },
    { ColumnCode: 'location', ColumnName: 'Location' },
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
    // this.getWorkgroups();
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  openCreateAdminDialog(): void {
    const dialogRef = this.dialog.open(CreateWorkgroupDialog, {
      width: '900px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


/**
 * Create Admin Dialog Component
 */
@Component({
  selector: 'app-create-workgroup-dialog',
  templateUrl: 'create-workgroup-dialog.html',
})
export class CreateWorkgroupDialog {

  selectedUsers: UserInfo[] = [];
  regions: Region[] = [];
  countries: Country[] = [];
  locations: Location[] = [];


  private locs: Location[] = [];
  selectedloc: Location[] = [];
  /** control for the selected FBU for multi-selection */
  public locMultiCtrl: FormControl = new FormControl();
  /** control for the MatSelect filter keyword multi-selection */
  public locMultiFilterCtrl: FormControl = new FormControl();
  /** list of FBUs filtered by search keyword for multi-selection */
  public filteredlocMulti: Subject<Location[]> = new Subject<Location[]>();
  locChecked = false;

  private regs: Region[] = [];
  selectedRegion: Region[] = [];
  /** control for the selected FBU for multi-selection */
  public regMultiCtrl: FormControl = new FormControl();
  /** control for the MatSelect filter keyword multi-selection */
  public regMultiFilterCtrl: FormControl = new FormControl();
  /** list of FBUs filtered by search keyword for multi-selection */
  public filteredregMulti: Subject<Region[]> = new Subject<Region[]>();
  regChecked = false;

  private ctrs: Country[] = [];
  selectedCtr: Country[] = [];
  /** control for the selected FBU for multi-selection */
  public ctrMultiCtrl: FormControl = new FormControl();
  /** control for the MatSelect filter keyword multi-selection */
  public ctrMultiFilterCtrl: FormControl = new FormControl();
  /** list of FBUs filtered by search keyword for multi-selection */
  public filteredctrMulti: Subject<Country[]> = new Subject<Country[]>();
  ctrChecked = false;

  public roles: Role[] = [];

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();


  constructor(
    public dialogRef: MatDialogRef<CreateWorkgroupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService) { }

  ngOnInit() {
    this.getActiveLocations();
    this.getActiveCountries();
    this.getActiveRegions();
  }

  /** Get all Active Locations */
  getActiveLocations() {
    this.adminService.getActiveLocations().subscribe(
      (data) => {
        this.locations = data;
        this.locs = data;
        this.filteredlocMulti.next(this.locs.slice());

        // listen for search field value changes
        this.locMultiFilterCtrl.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterlocMulti();
          });
      },
      (error) => {
        console.log(error);
      });
  }



  /**  */
  private filterlocMulti() {
    if (!this.locs) {
      return;
    }
    // get the search keyword
    let search = this.locMultiFilterCtrl.value;
    if (!search) {
      this.filteredlocMulti.next(this.locs.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    // filter the questionaire
    this.filteredlocMulti.next(
      this.locs.filter(loc => loc.name.toLowerCase().indexOf(search) > -1)
    );
  }

  /**  */
  toggleLocs() {
    if (!this.locChecked) {
      this.locations = this.locs;
    } else {
      this.locations = [];
    }
  }

  /**  */
  resetLocSelectAll() {
    if (this.locations.length === this.locs.length) {
      this.locChecked = true;
    } else {
      this.locChecked = false;
    }
  }



  /** Get all Active Regions */
  getActiveRegions() {
    this.adminService.getActiveRegions().subscribe(
      (data) => {
        this.regions = data;
        this.regs = data;
        this.filteredregMulti.next(this.regs.slice());

        // listen for search field value changes
        this.regMultiFilterCtrl.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterregMulti();
          });
      },
      (error) => {
        console.log(error);
      });
  }

  /**  */
  private filterregMulti() {
    if (!this.regs) {
      return;
    }
    // get the search keyword
    let search = this.regMultiFilterCtrl.value;
    if (!search) {
      this.filteredregMulti.next(this.regs.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    // filter the questionaire
    this.filteredregMulti.next(
      this.regs.filter(reg => reg.name.toLowerCase().indexOf(search) > -1)
    );
  }

  /**  */
  toggleRegs() {
    if (!this.regChecked) {
      this.regions = this.regs;
    } else {
      this.regions = [];
    }
  }

  /**  */
  resetRegSelectAll() {
    if (this.regions.length === this.regs.length) {
      this.regChecked = true;
    } else {
      this.regChecked = false;
    }
  }

  /** Get all Active Countries */
  getActiveCountries() {
    this.adminService.getActiveCountries().subscribe(
      (data) => {
        this.countries = data;
        this.ctrs = data;
        this.filteredctrMulti.next(this.ctrs.slice());

        // listen for search field value changes
        this.ctrMultiFilterCtrl.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterctrMulti();
          });
      },
      (error) => {
        console.log(error);
      });
  }

  /**  */
  private filterctrMulti() {
    if (!this.ctrs) {
      return;
    }
    // get the search keyword
    let search = this.ctrMultiFilterCtrl.value;
    if (!search) {
      this.filteredctrMulti.next(this.ctrs.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    // filter the questionaire
    this.filteredctrMulti.next(
      this.ctrs.filter(ctr => ctr.name.toLowerCase().indexOf(search) > -1)
    );
  }

  /**  */
  toggleCtrs() {
    if (!this.ctrChecked) {
      this.countries = this.ctrs;
    } else {
      this.countries = [];
    }
  }

  /**  */
  resetCtrSelectAll() {
    if (this.countries.length === this.ctrs.length) {
      this.ctrChecked = true;
    } else {
      this.ctrChecked = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /** Get Selected User from the Employee Search component */
  getSelectedUsers(users: UserInfo[]) {
    console.log(users);
    this.selectedUsers = users;
  }

}

