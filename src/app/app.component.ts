import { UploadFilesService } from './services/upload-files.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hello-doctor';
  public loginStatus: boolean = false;
 ngOnInit(){
  let temp: any = sessionStorage.getItem('userData');
  this.loginStatus = temp?true:false
 }
 constructor(private uploadService: UploadFilesService){
  this.uploadService.dataShare.subscribe((json: any)=>{
    this.loginStatus = json;
  });
 }


}
