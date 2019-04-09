import { SubmissionService } from './../../submission.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'app-issue-submit',
  templateUrl: './issue-submit.component.html',
  styleUrls: ['./issue-submit.component.css']
})
export class IssueSubmitComponent implements OnInit {
  submitForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    criteria: new FormControl(''),
    severity: new FormControl(''),
    category: new FormControl('')
  });

  constructor(
    private service: SubmissionService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    console.log('Form submitted:', this.submitForm.value);
    const { title, description, criteria, severity, category } = this.submitForm.value;
    const id = await this.service.getID();
    const user = await this.service.getTestUser();
    const resolutions = [];
    this.service.updateIssues({id, title, description, resolutions, user});
  }

  successCallback(successData: FirebaseUISignInSuccessWithAuthResult) {
    console.log('Success!');
  }
  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log('Error');
  }
}
