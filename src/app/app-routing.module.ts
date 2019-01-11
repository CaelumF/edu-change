import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueComponent } from './issue/issue.component';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  { path: 'issue/:id', component: IssueComponent },
  { path: 'home/', component: HomeComponent },
  { path: '', redirectTo: 'home/', pathMatch: 'full'},
  // { path: '**', redirectTo: 'home/' }
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
