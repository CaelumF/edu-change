import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueComponent } from './issue/issue.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'issue/:id', component: IssueComponent },
  { path: '**', redirectTo: '' }
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
