import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EmployeeSearchDialogComponent } from './employee-search-dialog.component';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {
  @Input() openDialog = true;
  @Input() employeeSearchValue: string;
  @Input() employeeSearchPlaceHolder: string;
  @Input() buttonPlaceHolder: string;
  @Input() multiple: boolean;
  @Input() hideInputText: boolean;
  @Output() private selectedUserListener = new EventEmitter<string>();

  private selectedUser: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  /** Open Dialog to Search Employee */
  openSearchEmployeeDialog() {
    const dialogRef = this.dialog.open(EmployeeSearchDialogComponent, {
      width: '65%',
      height: 'auto',
      disableClose: true,
      data: { multiple: this.multiple, closeDialog: this.openDialog }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!this.openDialog) {
        this.selectedUser = result;
        if (this.multiple === true) {
          let name = '';
          this.selectedUser.forEach((value) => {
            name = name + value.displayName + ', ';
          });

          this.employeeSearchValue = name;
        } else {
          this.employeeSearchValue = this.selectedUser && this.selectedUser.displayName;
        }
        this.selectedUserListener.emit(this.selectedUser);
      } else {
        this.employeeSearchValue = 'Search User';
        this.selectedUserListener.emit(result);
      }
    });
  }

}
