import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IssueService } from '../issue.service';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issue$: Observable<Issue>;
  issue: Issue;
  title: string;
  description: string;
  author: string;
  institute: string;
  reputation: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: IssueService
  ) { }

  ngOnInit() {
    this.issue$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.service.getIssue(+params.get('id')))
    );

    // tslint:disable-next-line:max-line-length
    this.issue$.subscribe(next => this.issue, error => console.log('Error with Issue Observable Subscription'), () => console.log('Issue Observer got a complete notification'));

    this.author = this.issue.user.name;
    this.institute = this.issue.user.institute;
    this.title = this.issue.title;
    this.description = this.issue.description;
    this.reputation = this.issue.user.reputation;
  }

}
