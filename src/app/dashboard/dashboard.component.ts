import { UploadFilesService } from './../services/upload-files.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public activeTab: number = 2
  constructor(private uploadService: UploadFilesService) { }
  public model: any = {};

  ngOnInit(): void {
    this.uploadService.dataShare.subscribe((json: any)=>{
      this.model = JSON.parse(json);
    });
  }
  setActiveTab(tab: number){
    this.activeTab = tab;
  }
  logOut(){
    localStorage.clear();
    this.uploadService.dataShare.next(null);
  }
}
