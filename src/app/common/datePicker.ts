import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <div>
      <div>{{to.label}}&nbsp;:&nbsp;</div>
      <input class="mat-form-control" matInput [matDatepicker]="picker" />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </div>
  `,
})
export class FormlyFieldDate extends FieldType {}
