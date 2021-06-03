import { UploadFilesService } from './../../services/upload-files.service';
import { abutConfig } from './../../data-model/userDetailsConfig';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Component, Inject, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public model: any = {
    firstName:"Shiva",
    cityName:"BJP"
  };
  public form = new FormGroup({});

  public options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = abutConfig;


  constructor(private uploadService: UploadFilesService) {}
  ngOnInit(): void {
    let temp: any = sessionStorage.getItem('userData');
    this.model = new Object(JSON.parse(temp?temp:{}));
    this.uploadService.dataShare.next(temp);
  }

  submit() {
    let jsonString : any = JSON.stringify(this.model);
    sessionStorage.setItem('userData', jsonString);
    this.uploadService.dataShare.next(jsonString);
  }
}
