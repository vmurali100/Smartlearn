import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInfo } from 'src/app/models/common.model';
import { Region, Country, Location } from 'src/app/models/master-data.model';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AdminService } from '../../../admins.service';



const rolesData: any[] = [
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

const locationsData: any[] = [
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

const regionData: any[] = [
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

const countriesData: any[] = [
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
    selector: 'app-create-admin-dialog',
    templateUrl: 'create-admin-dialog.html',
    styleUrls: ['./drag-drop.scss']
})
export class CreateAdminDialogComponent implements OnInit {
    todo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];

    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];

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
    private onDestroy = new Subject<void>();
    addForm: FormGroup;
    rowsForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<CreateAdminDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private adminService: AdminService, private fb: FormBuilder) {

        this.addForm = this.fb.group({
            items: [null, Validators.required],
            items_value: ['no', Validators.required]
        });
        this.rowsForm = this.fb.group({
            rows: this.fb.array([])
        });
    }

    ngOnInit(): void {
        this.getActiveLocations();
        this.getActiveCountries();
        this.getActiveRegions();
        this.getActiveRoles();
    }

    createItem(): FormGroup {
        return this.fb.group({
            name: '',
            description: '',
            qty: '',
            ans:''
        });
    }

    rowsArray(): FormArray {
        return this.rowsForm.get('rows') as FormArray;
    }

    removeRow(i: number): void {
        this.rowsArray().removeAt(i);
    }

    addQuestion(): void {
        this.rowsArray().push(this.createItem());
    }

    filesSelected(event): void {
        console.log(event);

    }
    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }
    /**  */
    getActiveRoles(): void {
        this.roles = rolesData;
        // this.adminService.getActiveRoles().subscribe(
        //   (data) => {
        //     this.roles = data;
        //   },
        //   (error) => {
        //     console.log(error);
        //   });
    }

    /** Get all Active Locations */
    getActiveLocations(): void {
        this.locations = locationsData;
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
    private filterlocMulti(): void {
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
    toggleLocs(): void {
        if (!this.locChecked) {
            this.locations = this.locs;
        } else {
            this.locations = [];
        }
    }

    /**  */
    resetLocSelectAll(): void {
        if (this.locations.length === this.locs.length) {
            this.locChecked = true;
        } else {
            this.locChecked = false;
        }
    }



    /** Get all Active Regions */
    getActiveRegions(): void {
        this.regions = regionData;
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
    private filterregMulti(): void {
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
    toggleRegs(): void {
        if (!this.regChecked) {
            this.regions = this.regs;
        } else {
            this.regions = [];
        }
    }

    /**  */
    resetRegSelectAll(): void {
        if (this.regions.length === this.regs.length) {
            this.regChecked = true;
        } else {
            this.regChecked = false;
        }
    }

    /** Get all Active Countries */
    getActiveCountries(): void {
        this.countries = countriesData;
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
    private filterctrMulti(): void {
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
    toggleCtrs(): void {
        if (!this.ctrChecked) {
            this.countries = this.ctrs;
        } else {
            this.countries = [];
        }
    }

    /**  */
    resetCtrSelectAll(): void {
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
    getSelectedUsers(users: UserInfo[]): void {
        this.selectedUsers = users;
    }

}
