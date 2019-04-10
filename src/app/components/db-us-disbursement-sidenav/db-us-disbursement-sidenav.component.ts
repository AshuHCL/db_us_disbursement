import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-db-us-disbursement-sidenav',
  templateUrl: './db-us-disbursement-sidenav.component.html',
  styleUrls: ['./db-us-disbursement-sidenav.component.css']
})
export class DbUsDisbursementSidenavComponent implements OnInit {
  
  // openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  //   document.getElementById("header").style.marginLeft = "250px";
  //   document.getElementById("menu-button").style.display = "none";
  // }

  // closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
  //   document.getElementById("header").style.marginLeft = "0";
  //   document.getElementById("menu-button").style.display = "block";
  // }

  constructor( private router: Router) {
  }

  ngOnInit() {
  }

}
