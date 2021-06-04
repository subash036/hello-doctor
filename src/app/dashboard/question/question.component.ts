import {
  question
} from './../../data-model/questions';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  previewDataList: any = [];
  submitFlag :boolean = false;
  previewFlag :boolean = false;
  refreshFlag: boolean = true;

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];

  constructor() {
    // this.fields = this.mapFields(question);
  }

  ngOnInit(): void {
    let temp: any = sessionStorage.getItem('userData');
    this.fields = question;
    this.model = new Object(JSON.parse(temp));
    // this.fields = this.mapFields(question);
  }

  submit() {
    sessionStorage.setItem('userData', JSON.stringify(this.model));
    this.submitFlag = true;
    this.previewDataList = question.map((data:any)=>{
    console.log("🚀 ~ file: question.component.ts ~ line 46 ~ QuestionComponent ~ this.previewDataList=this.fields.map ~ data", this.model)
      return {
        value:this.model[data.key][data.fieldGroup[0].templateOptions.key],
        key:data.fieldGroup[0].templateOptions.label,
        // outerValue:this.model[data.key],
        // outerKey:data.label
      };
    })
  }
  previewData(){
    this.previewFlag = true;
  }
  close(){
    this.previewFlag = false;
  }
}
