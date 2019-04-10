import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IssueService {

  displayCreatedIssue () {
  	return this.http.get('/assets/mocked-data/created_issues.json');
  }

  constructor(private http: HttpClient) { 
  }
}
