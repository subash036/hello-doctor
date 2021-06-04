import {
  question,
  questionYES,
  questionNO,
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
    this.modelChangeEvent(this.model);

    // this.fields = this.mapFields(question);
  }

  submit() {
    sessionStorage.setItem('userData', JSON.stringify(this.model));
    this.submitFlag = true;
    this.previewDataList = this.fields.map((data:any)=>{
      return {
        value:this.model[data.fieldGroup[0].key],
        key:[data.fieldGroup[0].templateOptions.label]
      };
    })
    console.log("🚀 ~ file: question.component.ts ~ line 52 ~ QuestionComponent ~ this.previewDataList=this.fields.map ~ this.previewDataList", this.previewDataList);
  }
  previewData(){
    this.previewFlag = true;
  }
  close(){
    this.previewFlag = false;
  }
  modelChangeEvent(event: Event) {

    this.refreshFlag = false;
    Object.keys(event).forEach((key) => {
      let q: any;
      if (this.model[key] == 'YES') {
        q = questionYES.filter((data) => data.ref_id == key + '_YES')[0];
      } else if (this.model[key] == 'NO') {
        q = questionNO.filter((data) => data.ref_id == key + '_NO')[0];
      }
      if (q) {
        this.fields.push(new Object(q));

        this.fields = _.uniqBy(this.fields, function (e: any) {
          return e.ref_id;
        });
        // if (this.model[key] == 'YES') {
        //   this.fields = _.filter(this.fields, (e: any) => {
        //     return e.ref_id != key + '_NO';
        //   });
        // } else if ((this.model[key] = 'NO')) {
        //   this.fields = _.filter(this.fields, (e: any) => {
        //     return e.ref_id != key + '_YES';
        //   });
        // }
      }
      setTimeout(() => {
        this.refreshFlag = true;
      }, 100);
    });
  }
}
