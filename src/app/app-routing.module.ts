import { IssueSubmitComponent } from './issue/issue-submit/issue-submit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueComponent } from './issue/issue.component';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RankedinstitutionsComponent} from './rankedinstitutions/rankedinstitutions.component';
import {Error404Component } from './error404/error404.component';

const appRoutes: Routes = [
  { path: 'issue/submit', component: IssueSubmitComponent },
  { path: 'issue/:id', component: IssueComponent },
  { path: 'issues/:id', redirectTo: 'issue/:id' },
  { path: 'home', component: HomeComponent },
  { path: 'global', component: RankedinstitutionsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
