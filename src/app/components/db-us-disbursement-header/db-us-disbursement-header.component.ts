import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-us-disbursement-header',
  templateUrl: './db-us-disbursement-header.component.html',
  styleUrls: ['./db-us-disbursement-header.component.css']
})
export class DbUsDisbursementHeaderComponent implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
