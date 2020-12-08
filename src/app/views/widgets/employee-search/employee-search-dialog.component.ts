
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject, Component, ViewChild } from '@angular/core';
import { EmployeeSearchService } from './employee-search.service';
import { EmployeeSearchReqdData } from './employee-search.model';
import { UserInfo } from 'src/app/models/common.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-employee-search-dialog',
  templateUrl: 'employee-search-dialog.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchDialogComponent {

  searchResult: Array<any> = [];
  searchedUsers: Array<any> = [];
  selectedUsers: any = [];
  lName = '';
  fName = '';
  emailId = '';
  phoneNumber = '';
  gId = '';
  reqdData = new EmployeeSearchReqdData();
  selectedUser: any = {};
  pageNumber = 1;
  isSearchResults = false;
  multiple = false;
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  columnsToDisplay = ['select', 'globalId', 'givenName', 'surname', 'officeLocation', 'mail'];

  constructor(
    public dialogRef: MatDialogRef<EmployeeSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData,
    public employeeSearchService: EmployeeSearchService
  ) {

    this.multiple = this.dialogData.multiple;
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialogData = null;
  }

  /** Clear Search results  */
  clearSearch() {
    this.searchResult = [];
    this.selectedUsers = [];
    this.fName = '';
    this.lName = '';
    this.gId = '';
    this.emailId = '';
    this.isSearchResults = false;
  }

  /** Fetch users from LDAP based on the search criteria */
  // searchUser() {
  //   this.searchedUsers = [];
  //   this.searchResult = [];
  //   let response: any;
  //   this.reqdData.firstName = this.fName.trim();
  //   this.reqdData.lastName = this.lName.trim();
  //   this.reqdData.globalId = this.gId.trim();
  //   this.reqdData.emailId = this.emailId.trim();
  //   this.reqdData.phoneNumber = this.phoneNumber.trim();

  //   this.employeeSearchService.fetchLdapUser(this.reqdData).subscribe(
  //     (data) => {
  //       response = data;
  //       this.searchedUsers = response;
  //       for (let user of this.searchedUsers) {
  //         this.searchResult.push(this.formatUserInfo(user));
  //       }
  //       if (!this.dialogData.closeDialog) {
  //         this.dialogData = this.searchResult;
  //         this.onSearchClick();
  //       }
  //       this.dataSource = new MatTableDataSource(this.searchResult);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //       this.isSearchResults = true;
  //     },
  //     (error) => {
  //     });
  // }
  searchUser() {
    this.searchedUsers = [];
    this.searchResult = [];
    let response: any;
    this.reqdData.firstName = this.fName.trim();
    this.reqdData.lastName = this.lName.trim();
    this.reqdData.globalId = this.gId.trim();
    this.reqdData.emailId = this.emailId.trim();
    this.reqdData.phoneNumber = this.phoneNumber.trim();
    console.log(this.reqdData);
    
    this.employeeSearchService.fetchLdapUser(this.reqdData).subscribe(
    (data) => {
    response = data;
    this.searchedUsers = response;
    for (let user of this.searchedUsers) {
    if ((!this.reqdData.firstName || this.reqdData.firstName.includes(this.formatUserInfo(user).givenName)) &&
    (!this.reqdData.lastName || this.reqdData.lastName.includes(this.formatUserInfo(user).surname)) &&
    (!this.reqdData.globalId || this.reqdData.globalId.includes(this.formatUserInfo(user).globalId))) {
    this.searchResult.push(this.formatUserInfo(user));
    }
    }
    if (!this.dialogData.closeDialog) {
    this.dialogData = this.searchResult;
    this.onSearchClick();
    }
    this.dataSource = new MatTableDataSource(this.searchResult);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.isSearchResults = true;
    },
    (error) => {
    });
    }
    

   onSearchClick() {
     this.dialogData = this.searchResult;
     this.dialogRef.close(this.searchResult);
   }

  /** Format User Info from AD */
  formatUserInfo(userData: any) {
    let userInfo = new UserInfo();
    userInfo.displayName = userData.displayName;
    userInfo.givenName = userData.givenName;
    userInfo.jobTitle = userData.jobTitle;
    userInfo.mail = userData.mail;
    userInfo.mobilePhone = userData.mobilePhone;
    userInfo.officeLocation = userData.officeLocation;
    userInfo.surname = userData.surname;
    userInfo.userPrincipalName = userData.userPrincipalName;
    //  userInfo.businessPhones = userData.businessPhones[0];
    userInfo.globalId = userData.userPrincipalName.substring(0, userData.userPrincipalName.indexOf('@'));
    userInfo.profilePic = userData.profilePic;
    return userInfo;
  }


  /** On selection of Radio button */
  onRadioSelected(user: any) {
    this.dialogData = user;
  }

  onCheckboxSelected(data, event) {
    this.selectedUsers.push(data);
    this.dialogData = this.selectedUsers;
  }

  onCheckboxChange(data: UserInfo, e) {
    if (e.checked) {
      this.selectedUsers.push(data);
    } else {
      this.selectedUsers = this.selectedUsers.filter(obj => obj !== data);
    }
    this.dialogData = this.selectedUsers;
  }

  removeUser(user) {
    this.selectedUsers = this.selectedUsers.filter(obj => obj !== user);
  }

}

