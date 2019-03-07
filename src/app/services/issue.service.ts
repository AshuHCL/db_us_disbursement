declare var require: any;
import { Injectable } from '@angular/core';
const created_issues : any = require('src/app/mocked-data/created_issues.json');

@Injectable({
  providedIn: 'root',
})
export class IssueService {

  displayCreatedIssue () {
    return created_issues;
  }

  constructor() { 
  }
}
