import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { TableDataSource, TableItem } from "./table-datasource";
import { MatTableDataSource } from "@angular/material/table";
import { DialogTemplateComponent } from "./dialog-template/dialog-template.component";
import { DialogService } from "./dialog.service";

export interface PeriodicElement {
  name: string;
  id: number;
  gender: string;
  department: string;
  doctor: string;
  requestedDate: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: "Hydrogen",
    gender: "Male",
    department: "H",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 2,
    name: "Helium",
    gender: "Female",
    department: "He",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 3,
    name: "Lithium",
    gender: "Male",
    department: "Li",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 4,
    name: "Beryllium",
    gender: "Female",
    department: "Be",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 5,
    name: "Boron",
    gender: "Male",
    department: "B",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 6,
    name: "Carbon",
    gender: "Female",
    department: "C",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 7,
    name: "Nitrogen",
    gender: "Male",
    department: "N",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 8,
    name: "Oxygen",
    gender: "Female",
    department: "O",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 9,
    name: "Fluorine",
    gender: "Male",
    department: "F",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 10,
    name: "Neon",
    gender: "Femlae",
    department: "Ne",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 11,
    name: "Neon",
    gender: "Femlae",
    department: "Ne",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 12,
    name: "Neon",
    gender: "Femlae",
    department: "Ne",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
];

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit, AfterViewInit {
  // displayedColumns: string[] = ["id", "name", "gender", "department"];
  //dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = [
    "id",
    "name",
    "gender",
    "department",
    "doctor",
    "requestedDate",
    "time",
    "details",
    "status",
  ];

  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLocaleLowerCase();
  }
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogService
  ) {}
  ngOnInit() {
    //  this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }

  logData(row: PeriodicElement) {
    this.dialogService.onDialog(row);
    this.dialog.open(DialogTemplateComponent);
    console.log(row.name);
  }

  onCancel() {
    console.log("dfgh");
  }

  onDetail() {
    console.log("dfgh");
  }

  // AfterViewInit
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatTable) table: MatTable<TableItem>;
  // dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'name'];

  //ngOnInit() {
  // this.dataSource = new TableDataSource();
  //}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }
}
