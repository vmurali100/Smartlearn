import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AdminService } from "../../admins.service";
import { UserInfo, DisplayColumn } from "src/app/models/common.model";
import { Globals } from "src/app/globals/globals";
import { CreateAdminDialogComponent } from "./admin-dialog/create-admin-dialog.component";

const ELEMENT_DATA: any[] = [
  {
    id: 10,
    globalId: "aconkls",
    name: "Stacy Conklin",
    email: "stacy.conklin@adient.com",
    officeLocation: "Plymouth COE",
    createdBy: "asamuea6  ",
    createdTs: "2020-07-15T13:21:13.130+00:00",
    updatedBy: "asamuea6  ",
    updatedTs: "2020-07-15T13:21:13.130+00:00",
    deleteFlg: "N",
    userRole: {
      id: 1,
      code: "ADMIN",
      name: "Admin",
      createdBy: "asamuea6  ",
      createdTs: "2020-07-06T10:38:16.190+00:00",
      updatedBy: "asamuea6  ",
      updatedTs: "2020-07-06T10:38:16.190+00:00",
      deleteFlg: "N",
    },
  },
  {
    id: 14,
    globalId: "asamuea6",
    name: "Anish Samuel",
    email: "anish.samuel-ext@adient.com",
    officeLocation: "Plymouth COE",
    createdBy: "asamuea6  ",
    createdTs: "2020-07-21T17:54:06.210+00:00",
    updatedBy: "asamuea6  ",
    updatedTs: "2020-07-21T17:54:06.210+00:00",
    deleteFlg: "N",
    userRole: {
      id: 1,
      code: "ADMIN",
      name: "Admin",
      createdBy: "asamuea6  ",
      createdTs: "2020-07-06T10:38:16.190+00:00",
      updatedBy: "asamuea6  ",
      updatedTs: "2020-07-06T10:38:16.190+00:00",
      deleteFlg: "N",
    },
  },
  {
    id: 21,
    globalId: "amanohvi",
    name: "Vinod Manoharan",
    email: "vinod.manoharan@adient.com",
    officeLocation: "Plymouth COE",
    createdBy: "asamuea6  ",
    createdTs: "2020-09-14T20:01:09.577+00:00",
    updatedBy: "asamuea6  ",
    updatedTs: "2020-09-14T20:01:09.577+00:00",
    deleteFlg: "N",
    userRole: {
      id: 1,
      code: "ADMIN",
      name: "Admin",
      createdBy: "asamuea6  ",
      createdTs: "2020-07-06T10:38:16.190+00:00",
      updatedBy: "asamuea6  ",
      updatedTs: "2020-07-06T10:38:16.190+00:00",
      deleteFlg: "N",
    },
  },
  {
    id: 25,
    globalId: "aperumk",
    name: "Karunakaran Perumal",
    email: "karunakaran.perumal-ext@adient.com",
    officeLocation: "Holland Customer Center",
    createdBy: "asamuea6  ",
    createdTs: "2020-09-22T03:35:24.043+00:00",
    updatedBy: "asamuea6  ",
    updatedTs: "2020-09-22T03:35:24.043+00:00",
    deleteFlg: "N",
    userRole: {
      id: 1,
      code: "ADMIN",
      name: "Admin",
      createdBy: "asamuea6  ",
      createdTs: "2020-07-06T10:38:16.190+00:00",
      updatedBy: "asamuea6  ",
      updatedTs: "2020-07-06T10:38:16.190+00:00",
      deleteFlg: "N",
    },
  },
  {
    id: 27,
    globalId: "jkhans",
    name: "Sajid Khan",
    email: "sajid.khan-ext@adient.com",
    officeLocation: "Plymouth COE",
    createdBy: null,
    createdTs: "2020-10-06T14:02:27.637+00:00",
    updatedBy: null,
    updatedTs: "2020-10-06T14:02:27.637+00:00",
    deleteFlg: "N",
    userRole: {
      id: 1,
      code: "ADMIN",
      name: "Admin",
      createdBy: "asamuea6  ",
      createdTs: "2020-07-06T10:38:16.190+00:00",
      updatedBy: "asamuea6  ",
      updatedTs: "2020-07-06T10:38:16.190+00:00",
      deleteFlg: "N",
    },
  },
];

@Component({
  selector: "app-add-quiz",
  templateUrl: "./add-quiz.component.html",
  styleUrls: ["./add-quiz.component.scss"],
})
export class AddQuizComponent implements OnInit {
  dataSource;
  isAdmin = false;

  columnsToDisplay = ["globalId", "name", "email", "action"];
  columnsToDisplayObjects: DisplayColumn[] = [
    { ColumnCode: "globalId", ColumnName: "Global Id" },
    { ColumnCode: "name", ColumnName: "Name" },
    { ColumnCode: "email", ColumnName: "Email" },

    { ColumnCode: "action", ColumnName: "Action" },
  ];

  selectedUsers: UserInfo[] = [];

  searchMaster: string;
  public fieldArray: Array<any> = [];
  private newAttribute: any = {};
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public globals: Globals,
    public adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.globals.isAdmin;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Get Selected User from the Employee Search component */
  getSelectedUser(users: UserInfo[]): void {
    this.selectedUsers = users;
    this.createAdmin(this.selectedUsers);
  }

  /** Get List of all Active Announcements */
  getAdmins(): void {
    this.adminService.getAdmins().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /** Create Admin */
  createAdmin(selectedUsers): void {}

  /** Delete Admin */
  deleteAdmin(admin): void {}

  applyFilterMaster(): void {
    this.dataSource.filter = this.searchMaster.trim().toLowerCase();
  }

  openCreateAdminDialog(): void {
    const dialogRef = this.dialog.open(CreateAdminDialogComponent, {
      width: "1000px",
      height: "500px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}

/**
 * Create Admin Dialog Component
 */
