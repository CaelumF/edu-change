import {Injectable} from '@angular/core';

import {Issue} from './issue';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  constructor(private db: AngularFirestore) { }
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
    return this.db.collection<Issue>('issues').valueChanges();
  }
  getIssue (id: number) {
    return this.getIssues().pipe(
      map((issues: Issue[]) => issues.find((issue) => issue.id === +id))
    );
  }
}
