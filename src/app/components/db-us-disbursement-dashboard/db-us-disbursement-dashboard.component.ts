import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { IssueService } from 'src/app/services/issue.service';

export interface Issues {
  issueId: number;
  transCode: number;
  accountNumber: number;
  status: string;
  payeeName1: string;
  payeeName2: string;
  chkDate: Date;
  amount: number;
  chkNum: number;
  createdDate: Date;
  cRC_Check: number;
  modifiedDate: Date;
  countryCode: string;
  payeeAddress1: string;
}

export interface Dates {
  value: string;
  viewValue: string;
}

export interface listType {
  value: string;
  viewValue: string;
}

var ELEMENT_DATA: Issues[];

@Component({
  selector: 'app-db-us-disbursement-dashboard',
  templateUrl: './db-us-disbursement-dashboard.component.html',
  styleUrls: ['./db-us-disbursement-dashboard.component.css']
})

export class DbUsDisbursementDashboardComponent implements OnInit {

  // Initialisations
  displayedColumns: string[] = [];
  defaultSelectedDate: String = '';
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<Issues>(true, []);
  dates: Dates[] = [];
  listType: listType[] = [
    {value: 'Issues', viewValue: 'Issues'},
    {value: 'Photocopy Requests', viewValue: 'Photocopy Requests'},
    {value: 'Paid Items', viewValue: 'Paid Items'}
  ];
  defaultSelectedListType = this.listType[0].value;
  
  applicationDefaults() {
    this.displayedColumns = ['select', 'accountNumber', 'chkNum',
    'amount', 'Dates', 'status',
    'payeeName1'];
    this.dates = [
      {value: 'createdDate', viewValue: 'Created Date'},
      {value: 'modifiedDate', viewValue: 'Modified Date'},
      {value: 'checkDate', viewValue: 'Check Date'}
    ];
    this.defaultSelectedDate = this.dates[0].value;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  selectionChanged() {
    if(this.defaultSelectedListType === 'Photocopy Requests') {
      this.displayedColumns = ['select', 'accountNumber', 'chkNum',
      'requestId', 'Dates', 'status',
      'payeeName1'];

      this.dates= [
        {value: 'requestedDate', viewValue: 'Requested Date'}
      ];
      this.defaultSelectedDate = this.dates[0].value;
    } else if (this.defaultSelectedListType === 'Paid Items') {
      this.displayedColumns = ['select', 'accountNumber', 'chkNum',
      'CPCSISN', 'Dates', 'status',
      'payeeName1'];

      this.dates= [
        {value: 'paidDate', viewValue: 'Paid Date'}
      ];
      this.defaultSelectedDate = this.dates[0].value;
    } else {
      this.applicationDefaults();
    }
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private issueService: IssueService) {
    ELEMENT_DATA = this.issueService.displayCreatedIssue();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.applicationDefaults();
  }
}
