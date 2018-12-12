import { Injectable } from '@angular/core';

import { Issue } from './issue';
import { Observable, of } from 'rxjs';
import { ISSUES } from 'src/assets/issues';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  constructor() { }

  getIssues (): Observable<Issue[]> {
    return of(ISSUES);
  }
  getIssue (id: number) {
    return this.getIssues().pipe(
      map((issues: Issue[]) => issues.find((issue) => issue.id === +id))
    );
  }
}
