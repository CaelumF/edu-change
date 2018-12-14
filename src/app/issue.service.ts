import { Injectable } from '@angular/core';

import { Issue } from './issue';
import { Observable, of } from 'rxjs';
import { ISSUES } from 'src/assets/issues';
import { map } from 'rxjs/operators';

import { } from '../assets/issues';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  constructor() { }
  request: XMLHttpRequest = new XMLHttpRequest;
  getIssues (): Observable<Issue[]> {
    // const ISSUES: Issue[] = [];
    // this.request.open('GET', '../../assets/issues.json', false);
    // this.request.send(null);
    // console.log(JSON.parse(this.request.responseText));
    // const raw: [] = JSON.parse(this.request.responseText);
    // raw.forEach(element => {
    //   console.log(element.valueOf("description"));
    // });

    return of(ISSUES);
  }
  getIssue (id: number) {
    return this.getIssues().pipe(
      map((issues: Issue[]) => issues.find((issue) => issue.id === +id))
    );
  }
}
