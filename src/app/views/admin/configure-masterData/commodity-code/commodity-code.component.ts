import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DisplayColumn } from "src/app/models/common.model";
import { EmployeeSearchReqdData } from "src/app/views/widgets/employee-search/employee-search.model";

const ELEMENT_DATA: any[] = [
  {
    id: 1,
    name: "Software Maintenance and Support",
    code: "903460",
    description: "Software Maintenance and Support",
  },
  {
    id: 2,
    name: "IT Consulting",
    code: "905211",
    description: "IT Consulting",
  },
  {
    id: 3,
    name: "Software Licensing - License Management Software",
    code: "903450",
    description: "Software Licensing - License Management Software",
  },
  {
    id: 3,
    name: "Software as a Service",
    code: "903266",
    description: "Software as a Service",
  },
];

@Component({
  selector: "app-commodity-code",
  templateUrl: "./commodity-code.component.html",
  styleUrls: ["./commodity-code.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class CommodityCodeComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  columnsToDisplay = ["code", "name", "email", "description", "action"];
  columnsToDisplayObjects: DisplayColumn[] = [
    { ColumnCode: "code", ColumnName: "Course ID" },
    { ColumnCode: "name", ColumnName: "Course Name" },
    { ColumnCode: "email", ColumnName: "Email" },
    { ColumnCode: "description", ColumnName: "Roll" },
    { ColumnCode: "action", ColumnName: "Action" },
  ];
  expandedElement: any | null;

  searchMaster: string;
  public fieldArray: Array<any> = [];
  private newAttribute: any = {};
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Upload File  */
  uploadFile(e) {
    let fileName = e.target.files[0].name;
  }

  applyFilterMaster() {
    this.dataSource.filter = this.searchMaster.trim().toLowerCase();
  }

  /**  Add Dynamic Field */
  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
    console.log(this.fieldArray);
  }

  /**  Delete dynamic field   */
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  openCreateCommodityCodeDialog(): void {
    const dialogRef = this.dialog.open(CreateCommodityCodeDialog, {
      width: "900px",
      height: "500px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  openUploadCommodityCodeDialog(): void {
    const dialogRef = this.dialog.open(UploadCommodityCodeDialog, {
      width: "700px",
      height: "auto",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}

@Component({
  selector: "app-create-commodity-code-dialog",
  templateUrl: "create-commodity-code-dialog.html",
  styleUrls: ["coursedialog.scss"],
})
export class CreateCommodityCodeDialog {
  dataSource;
  employeeSearchValue = "Search User";
  userName;
  selectedUser: any = {};
  isSearchResults = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  columnsToDisplay = [
    "select",
    "globalId",
    "givenName",
    "surname",
    "officeLocation",
    "mail",
  ];
  constructor(
    public dialogRef: MatDialogRef<CreateCommodityCodeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  getSelectedUsers(event) {
    console.log(event);
    if (event.length) {
      this.isSearchResults = true;
      this.dataSource = new MatTableDataSource(event);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.isSearchResults = false;
    }
  }
  onRadioSelected(user: any) {
    this.employeeSearchValue = user.displayName;
  }
}

@Component({
  selector: "app-upload-commodity-code-dialog",
  templateUrl: "upload-commodity-code-dialog.html",
})
export class UploadCommodityCodeDialog {
  constructor(
    public dialogRef: MatDialogRef<UploadCommodityCodeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  /** Upload File  */
  uploadFile(e) {
    let fileName = e.target.files[0].name;
  }
}
