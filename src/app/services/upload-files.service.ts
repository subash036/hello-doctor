import { FormlyFieldConfig } from '@ngx-formly/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private baseUrl = 'http://localhost:8080';
  public dataShare = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);


    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  getUserData(): Observable<any> {
    return forkJoin([this.getUser(), this.getFields()]);
  }

  getUser() {
    return this.http.get<{ firstName: string, lastName: string }>('assets/json-powered/user_json');
  }

  getFields() {
    return this.http.get<FormlyFieldConfig[]>('assets/json-powered/user-form_json');
  }

  getColors() {
    return this.http.get<{ label: string; value: string }[]>('assets/json-powered/colors_json');
  }
}
