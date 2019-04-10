import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-db-us-disbursement-header',
  templateUrl: './db-us-disbursement-header.component.html',
  styleUrls: ['./db-us-disbursement-header.component.css']
})
export class DbUsDisbursementHeaderComponent implements OnInit {
  today: number = Date.now();
  constructor( private router: Router) { 

  }

  ngOnInit() {
  }

}
