import { Component, OnChanges, OnInit, NgZone, OnDestroy, Inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { navItems1, navItems2 } from '../../nav';
//import { Globals } from '../../views/globals';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { applicationconfig } from '../../config/application-name.config';
import { DisplayColumn } from 'src/app/models/common.model';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./default-layout.component.scss'],
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent implements OnInit {

  title1 = '';
  title2 = '';
  applicationName = '';


  public navItems;
  // To close the Navigation layouts
  public navigationClosed: boolean;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public childNavItems: any[];
  public childNavItemsIndex: any;
  public subchildNavItems: any[];
  public subchildNavItemsIndex: any;
  public user = 'user';

  constructor(
    public ngZone: NgZone,
    //public globals: Globals,
    public dialog: MatDialog,
    public router: Router,
  ) {
    this.changes = new MutationObserver(() => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit() {
    this.toggleSidebarNav();
    this.title1 = applicationconfig.title1;
    this.title2 = applicationconfig.title2;
    // this.applicationName = applicationconfig.applicationName;
  }

  switchUser(userType: string) {
    this.user = userType;
    this.toggleSidebarNav();
  }

  public logout = function () {
    this.adal.logOut();
  };

  /** Toggle side bar when clicked outside the focus*/
  toggleSideNav() {
    // $('body').removeClass('sidebar-show');
  }

  /** Open Office display **/
  toggleOfficeDisplay() {
    this.navigationClosed = !this.navigationClosed;
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }



  navigateToCreateRequest() {
    this.router.navigateByUrl('/select-request');
  }

  toggleSidebarNav() {
    if (this.user === 'admin') {
      this.navItems = navItems2;
    } else if (this.user === 'user') {
      this.navItems = navItems1;
    }
  }

  openHelp() {
    const dialogRef = this.dialog.open(HelpDialog, {
      width: '60%',
      height: '80%',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openHelpTutorials() {
    const dialogRef = this.dialog.open(TutorialsDialog, {
      autoFocus: false,
      panelClass: 'tutorials-dialog',
      width: '1100px',
      height: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}



@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.html',
})
export class HelpDialog implements OnInit {

  selected = 0;
  createTicketForm: FormGroup;

  ticketsData: any[] = [
    { ticketNumber: 'INC123456', priority: 'Medium', status: 'Resolved', assignedTo: 'Anandraj Asokan', created: '08/06/2020', resolved: '08/07/2020' },
    { ticketNumber: 'SCTASK123456', priority: 'Low', status: 'Assigned', assignedTo: 'Anandraj Asokan', created: '08/10/2020', resolved: null },
  ];

  displayedColumns: string[] = ['ticketNumber', 'priority', 'status', 'assignedTo', 'created', 'resolved'];

  displayedColumnObjects: DisplayColumn[] = [
    { ColumnCode: 'ticketNumber', ColumnName: 'Ticket#' },
    { ColumnCode: 'priority', ColumnName: 'Prioirity' },
    { ColumnCode: 'status', ColumnName: 'Status' },
    { ColumnCode: 'assignedTo', ColumnName: 'Assigned To' },
    { ColumnCode: 'created', ColumnName: 'Created Date' },
    { ColumnCode: 'resolved', ColumnName: 'Resolved Date' },
  ];

  ticketsDataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialogRef: MatDialogRef<HelpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit() {
    this.createTicketForm = new FormGroup({
      type: new FormControl(),
      priority: new FormControl(),
      description: new FormControl(),
    });

    this.ticketsDataSource = new MatTableDataSource(this.ticketsData);
    this.ticketsDataSource.sort = this.sort;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createTicket() {

  }

}


@Component({
  selector: 'app-tutorials-dialog',
  templateUrl: './tutorials-dialog.html',
})
export class TutorialsDialog implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  selectedTutorial: number = null;

  showGetStarted = true;

  tutorials: any[] = [
    { tutorialId: 1, tutorialName: 'About Smart Fleet', tutorialLink: 'assets/videos/about_smart_fleet.mp4', isVideo: true }
  ];

  maximize = false;

  constructor(
    public dialogRef: MatDialogRef<TutorialsDialog>, public changeDetectorRef: ChangeDetectorRef, public media: MediaMatcher,
    public sanitizer: DomSanitizer, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getTutorialURL(tutorial: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(tutorial.tutorialLink);
  }

  showTutorial(tutorialId: number): boolean {
    if (this.selectedTutorial == tutorialId) {
      this.showGetStarted = false;
      return true;
    } else {
      this.showGetStarted = true;
      return false;
    }
  }

  startTutorial() {
    this.showGetStarted = false;
    this.selectedTutorial = 1;
  }
}
