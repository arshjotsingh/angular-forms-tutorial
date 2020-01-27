import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-serttings-form',
  templateUrl: './user-serttings-form.component.html',
  styleUrls: ['./user-serttings-form.component.css']
})
export class UserSerttingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  postErrorMessage: string;
  postError: boolean;
  subscriptionTypes = new Observable<string[]>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onBlur(field: NgModel) {
    console.log('in onBlur', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmite: ', form.valid);

    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }


  }
  onHttpError(errorResponse: any): void {
    console.log('error: ', errorResponse);
    this.postError = true,
      this.postErrorMessage = errorResponse.error.errorMessage;
  }
}
