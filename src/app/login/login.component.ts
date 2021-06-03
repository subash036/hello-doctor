import { UploadFilesService } from './../services/upload-files.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginData: any ={
    firstName:"",
    password:""
  };
  constructor(private uploadService: UploadFilesService) { }
  ngOnInit(): void {
    localStorage.clear();
  }
  login(){
    let temp : any = JSON.stringify(this.loginData);
    sessionStorage.setItem('userData', temp);
    this.uploadService.dataShare.next(temp);
  }

}
