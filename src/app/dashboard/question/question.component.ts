import { question } from './../../data-model/questions';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let temp: any = sessionStorage.getItem('userData');
    this.model = JSON.parse(temp);
  }
  form = new FormGroup({});
  model: any;

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = question;

  submit() {
    sessionStorage.setItem('userData', JSON.stringify(this.model));
  }

}
