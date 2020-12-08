import { Component, OnInit, Inject } from '@angular/core';
import { UserInfo } from 'src/app/models/common.model';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from '../../../admins.service';
import { Subject } from 'rxjs';
import { Role, Country, Region, Location } from 'src/app/models/master-data.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.scss']
})
export class CreateWorkflowComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  selectedUsers: UserInfo[] = [];
  regions: Region[] = [];
  countries: Country[] = [];
  locations: Location[] = [];
  workGroups: any[] = [];

  private wgs: any[];
  selectedwg: any[] = [];
  /** control for the selected FBU for multi-selection */
  public wgMultiCtrl: FormControl = new FormControl();
  /** control for the MatSelect filter keyword multi-selection */
  public wgMultiFilterCtrl: FormControl = new FormControl();
  /** list of FBUs filtered by search keyword for multi-selection */
  public filteredwgMulti: Subject<any[]> = new Subject<any[]>();
  wgChecked = false;


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

  public roles: Role[];

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  constructor(
    private adminService: AdminService) { }

  ngOnInit() {
    this.getActiveLocations();
    this.getActiveCountries();
    this.getActiveRegions();
    this.getActiveWorkGroups();
  }

  /** Get List of all Active Announcements */
  getActiveWorkGroups() {
    this.adminService.getWorkgroups().subscribe(
      (data) => {
        this.workGroups = data;
        this.wgs = data;
        this.filteredwgMulti.next(this.wgs.slice());

        // listen for search field value changes
        this.wgMultiFilterCtrl.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterwgMulti();
          });
      },
      (error) => {
        console.log(error);
      });
  }


  /**  */
  private filterwgMulti() {
    if (!this.wgs) {
      return;
    }
    // get the search keyword
    let search = this.wgMultiFilterCtrl.value;
    if (!search) {
      this.filteredwgMulti.next(this.wgs.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    // filter the questionaire
    this.filteredwgMulti.next(
      this.wgs.filter(wg => wg.name.toLowerCase().indexOf(search) > -1)
    );
  }

  /**  */
  togglewgs() {
    if (!this.wgChecked) {
      this.workGroups = this.wgs;
    } else {
      this.workGroups = [];
    }
  }

  /**  */
  resetWgSelectAll() {
    if (this.workGroups.length === this.wgs.length) {
      this.wgChecked = true;
    } else {
      this.wgChecked = false;
    }
  }

  /** Get all Active Locations */
  getActiveLocations() {
    this.adminService.getActiveLocations().subscribe(
      (data) => {

        this.locations = data;
        this.locs = data;
        this.filteredlocMulti.next(this.locs.slice());
        console.log('locations : ', this.locations);
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
        console.log(this.regions);
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

  /** Get Selected User from the Employee Search component */
  getSelectedUsers(users: UserInfo[]) {
    console.log(users);
    this.selectedUsers = users;
  }

}
