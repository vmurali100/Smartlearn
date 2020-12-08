import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportDisplayColumn, DisplayColumn } from 'src/app/models/common.model';




@Component({
  selector: 'app-generic-report-form',
  templateUrl: './generic-report-form.component.html',
  styleUrls: ['./generic-report-form.component.scss']
})
export class GenericReportFormComponent implements OnInit {
  @Input() data: any[];
  @Input() displayColumnsList: string[];
  @Input() displayedColumnObjectsList: ReportDisplayColumn[];

  displayedColumns: string[] = [];
  columnsToDisplay: string[] = [];
  columnToDisplayObjects: DisplayColumn[] = [];

  displayedColumnObjects: ReportDisplayColumn[];


  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('allMasterColumnSelected') private allMasterColumnSelected: MatOption;

  public selectedMastercolumns: any[];
  searchMaster: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.getDisplayColumns();
    this.displayedColumnObjects = this.displayedColumnObjectsList;
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.columnsToDisplay = this.displayedColumns;
    this.columnToDisplayObjects = this.displayedColumnObjects;
    this.selectedMastercolumns = this.displayedColumns;

  }

  getDisplayColumns() {
    for (let col of this.displayedColumnObjectsList) {
      this.displayedColumns.push(col.ColumnCode);
    }
    console.log(this.displayedColumns);
  }

  applyFilterMaster() {
    this.dataSource.filter = this.searchMaster.trim().toLowerCase();
  }

  toggleColumns() {
    this.columnsToDisplay = this.selectedMastercolumns;
  }
}







