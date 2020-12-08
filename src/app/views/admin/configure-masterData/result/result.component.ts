import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { Globals } from 'src/app/globals/globals';
import { DisplayColumn, UserInfo } from 'src/app/models/common.model';
import { Country, Region,  Location } from 'src/app/models/master-data.model';
import { AdminService } from '../../admins.service';

const ELEMENT_DATA: any[] = [
  {
    id: 10,
    globalId: 'aconkls',
    name: 'Stacy Conklin',
    email: 'stacy.conklin@adient.com',
    officeLocation: 'Plymouth COE',
    createdBy: 'asamuea6  ',
    createdTs: '2020-07-15T13:21:13.130+00:00',
    updatedBy: 'asamuea6  ',
    updatedTs: '2020-07-15T13:21:13.130+00:00',
    deleteFlg: 'N',
    userRole: {
      id: 1,
      code: 'ADMIN',
      name: 'Admin',
      createdBy: 'asamuea6  ',
      createdTs: '2020-07-06T10:38:16.190+00:00',
      updatedBy: 'asamuea6  ',
      updatedTs: '2020-07-06T10:38:16.190+00:00',
      deleteFlg: 'N'
    }
  },
  {
    id: 14,
    globalId: 'asamuea6',
    name: 'Anish Samuel',
    email: 'anish.samuel-ext@adient.com',
    officeLocation: 'Plymouth COE',
    createdBy: 'asamuea6  ',
    createdTs: '2020-07-21T17:54:06.210+00:00',
    updatedBy: 'asamuea6  ',
    updatedTs: '2020-07-21T17:54:06.210+00:00',
    deleteFlg: 'N',
    userRole: {
      id: 1,
      code: 'ADMIN',
      name: 'Admin',
      createdBy: 'asamuea6  ',
      createdTs: '2020-07-06T10:38:16.190+00:00',
      updatedBy: 'asamuea6  ',
      updatedTs: '2020-07-06T10:38:16.190+00:00',
      deleteFlg: 'N'
    }
  },
  {
    id: 21,
    globalId: 'amanohvi',
    name: 'Vinod Manoharan',
    email: 'vinod.manoharan@adient.com',
    officeLocation: 'Plymouth COE',
    createdBy: 'asamuea6  ',
    createdTs: '2020-09-14T20:01:09.577+00:00',
    updatedBy: 'asamuea6  ',
    updatedTs: '2020-09-14T20:01:09.577+00:00',
    deleteFlg: 'N',
    userRole: {
      id: 1,
      code: 'ADMIN',
      name: 'Admin',
      createdBy: 'asamuea6  ',
      createdTs: '2020-07-06T10:38:16.190+00:00',
      updatedBy: 'asamuea6  ',
      updatedTs: '2020-07-06T10:38:16.190+00:00',
      deleteFlg: 'N'
    }
  },
  {
    id: 25,
    globalId: 'aperumk',
    name: 'Karunakaran Perumal',
    email: 'karunakaran.perumal-ext@adient.com',
    officeLocation: 'Holland Customer Center',
    createdBy: 'asamuea6  ',
    createdTs: '2020-09-22T03:35:24.043+00:00',
    updatedBy: 'asamuea6  ',
    updatedTs: '2020-09-22T03:35:24.043+00:00',
    deleteFlg: 'N',
    userRole: {
      id: 1,
      code: 'ADMIN',
      name: 'Admin',
      createdBy: 'asamuea6  ',
      createdTs: '2020-07-06T10:38:16.190+00:00',
      updatedBy: 'asamuea6  ',
      updatedTs: '2020-07-06T10:38:16.190+00:00',
      deleteFlg: 'N'
    }
  },
  {
    id: 27,
    globalId: 'jkhans',
    name: 'Sajid Khan',
    email: 'sajid.khan-ext@adient.com',
    officeLocation: 'Plymouth COE',
    createdBy: null,
    createdTs: '2020-10-06T14:02:27.637+00:00',
    updatedBy: null,
    updatedTs: '2020-10-06T14:02:27.637+00:00',
    deleteFlg: 'N',
    userRole: {
      id: 1,
      code: 'ADMIN',
      name: 'Admin',
      createdBy: 'asamuea6  ',
      createdTs: '2020-07-06T10:38:16.190+00:00',
      updatedBy: 'asamuea6  ',
      updatedTs: '2020-07-06T10:38:16.190+00:00',
      deleteFlg: 'N'
    }
  }
];

const roles_data: any[] = [
  {
    id: 1,
    name: 'Admin',
    code: '3000',
    description: ''
  },
  {
    id: 2,
    name: 'User',
    code: '3017',
    description: ''
  }
];

const locations_data: any[] = [
  {
    id: 1,
    name: 'Plymouth',
    code: '903460',
    description: ''
  },
  {
    id: 2,
    name: 'Holland',
    code: '905211',
    description: ''
  },
  {
    id: 3,
    name: 'Northwood',
    code: '903450',
    description: ''
  },
  {
    id: 3,
    name: 'Sycamore',
    code: '903266',
    description: ''
  }
];

const region_data: any[] = [
  {
    id: 1,
    name: 'NA',
    code: '3000',
    description: ''
  },
  {
    id: 2,
    name: 'APAC',
    code: '3017',
    description: ''
  },
  {
    id: 3,
    name: 'LATM',
    code: '3019',
    description: ''
  },
  {
    id: 4,
    name: 'APAC',
    code: '3021',
    description: ''
  }
];

const countries_data: any[] = [
  {
    id: 1,
    name: 'USA',
    code: 'USD',
    description: 'percent'
  },
  {
    id: 1,
    name: 'Canada',
    code: 'INR',
    description: 'per mile'
  },
  {
    id: 1,
    name: 'Mexico',
    code: 'Eur',
    description: 'Each'
  },
  {
    id: 1,
    name: 'Cuba',
    code: 'AFN',
    description: 'Each'
  },
  {
    id: 1,
    name: 'Panama',
    code: 'ANG',
    description: 'Fahrenheit'
  }
];

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  dataSource;
  isAdmin = false;

  columnsToDisplay = ['globalId', 'name', 'email', 'officeLocation', 'action'];
  columnsToDisplayObjects: DisplayColumn[] = [
    { ColumnCode: 'globalId', ColumnName: 'Global Id' },
    { ColumnCode: 'name', ColumnName: 'Name' },
    { ColumnCode: 'email', ColumnName: 'Email' },
    { ColumnCode: 'officeLocation', ColumnName: 'Office Location' },
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
    //this.getAdmins();
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
  getAdmins() {
    this.adminService.getAdmins().subscribe(
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
    const dialogRef = this.dialog.open(CreateAdminDialog, {
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
  selector: 'app-create-admin-dialog',
  templateUrl: 'result-admin-dialog.html',
})
export class CreateAdminDialog {

  selectedUsers: UserInfo[] = [];
  regions: Region[] = [];
  countries: Country[] = [];
  locations: Location[] = [];


  private locs: Location[];
  selectedloc: Location[] = [];
  /** control for the selected FBU for multi-selection */
  public locMultiCtrl: FormControl = new FormControl();
  /** control for the MatSelect filter keyword multi-selection */
  public locMultiFilterCtrl: FormControl = new FormControl();
  /** list of FBUs filtered by search keyword for multi-selection */
  public filteredlocMulti: Subject<Location[]> = new Subject<Location[]>();
  locChecked = false;

  private regs: Region[];
  selectedRegion: Region[] = [];
  /** control for the selected FBU for multi-selection */
  public regMultiCtrl: FormControl = new FormControl();
  /** control for the MatSelect filter keyword multi-selection */
  public regMultiFilterCtrl: FormControl = new FormControl();
  /** list of FBUs filtered by search keyword for multi-selection */
  public filteredregMulti: Subject<Region[]> = new Subject<Region[]>();
  regChecked = false;

  private ctrs: Country[];
  selectedCtr: Country[] = [];
  /** control for the selected FBU for multi-selection */
  public ctrMultiCtrl: FormControl = new FormControl();
  /** control for the MatSelect filter keyword multi-selection */
  public ctrMultiFilterCtrl: FormControl = new FormControl();
  /** list of FBUs filtered by search keyword for multi-selection */
  public filteredctrMulti: Subject<Country[]> = new Subject<Country[]>();
  ctrChecked = false;

  public roles: any[];

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();


  constructor(
    public dialogRef: MatDialogRef<CreateAdminDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService) { }

  ngOnInit() {
    this.getActiveLocations();
    this.getActiveCountries();
    this.getActiveRegions();
    this.getActiveRoles();
  }

  /**  */
  getActiveRoles() {
    this.roles = roles_data;
    // this.adminService.getActiveRoles().subscribe(
    //   (data) => {
    //     this.roles = data;
    //   },
    //   (error) => {
    //     console.log(error);
    //   });
  }

  /** Get all Active Locations */
  getActiveLocations() {
    this.locations = locations_data;
    // this.adminService.getActiveLocations().subscribe(
    //   (data) => {
    //     this.locations = data;
    //     this.locs = data;
    //     this.filteredlocMulti.next(this.locs.slice());

    //     // listen for search field value changes
    //     this.locMultiFilterCtrl.valueChanges
    //       .pipe(takeUntil(this._onDestroy))
    //       .subscribe(() => {
    //         this.filterlocMulti();
    //       });
    //   },
    //   (error) => {
    //     console.log(error);
    //   });
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
    this.regions = region_data;
    // this.adminService.getActiveRegions().subscribe(
    //   (data) => {
    //     this.regions = data;
    //     this.regs = data;
    //     this.filteredregMulti.next(this.regs.slice());

    //     // listen for search field value changes
    //     this.regMultiFilterCtrl.valueChanges
    //       .pipe(takeUntil(this._onDestroy))
    //       .subscribe(() => {
    //         this.filterregMulti();
    //       });
    //   },
    //   (error) => {
    //     console.log(error);
    //   });
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
    this.countries = countries_data;
    // this.adminService.getActiveCountries().subscribe(
    //   (data) => {
    //     this.countries = data;
    //     this.ctrs = data;
    //     this.filteredctrMulti.next(this.ctrs.slice());

    //     // listen for search field value changes
    //     this.ctrMultiFilterCtrl.valueChanges
    //       .pipe(takeUntil(this._onDestroy))
    //       .subscribe(() => {
    //         this.filterctrMulti();
    //       });
    //   },
    //   (error) => {
    //     console.log(error);
    //   });
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
    this.selectedUsers = users;
  }

}

