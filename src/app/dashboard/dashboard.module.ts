import { UploadFilesService } from 'src/app/services/upload-files.service';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldDate } from './../common/datePicker';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { QuestionComponent } from './question/question.component';
import { UploadComponent } from './upload/upload.component';
import { HistoryComponent } from './history/history.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, AboutComponent, FormlyFieldDate, QuestionComponent, UploadComponent, HistoryComponent, UploadFilesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'date',
          component: FormlyFieldDate,
          // wrappers: ['label', 'fieldset'],
        },
      ],
    }),

  ],
  exports: [DashboardComponent],
  providers:[UploadFilesService]
})
export class DashboardModule {}
