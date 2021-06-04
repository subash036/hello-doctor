import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <div class="card">
      <h3 class="card-header">
        {{ to.label }}
        <div class="form-check">
          <input
            (click)="checkValue('Yes')"
            class="form-check-input"
            type="radio"
            [name]="field.key"
            [id]="field.key"
          />
          <label class="form-check-label" [for]="field.key"> No </label>
        </div>
        <div class="form-check">
          <input

            (click)="checkValue('No')"
            class="form-check-input"
            type="radio"
            [name]="field.key"
            [id]="field.key"
            checked
          />
          <label class="form-check-label" [for]="field.key"> Yes </label>
        </div>
      </h3>

      <div *ngIf="yesNo == 'No'" class="card-body">
        <ng-container  #fieldComponent></ng-container>
      </div>
    </div>
  `,
})
export class PanelWrapperComponent extends FieldWrapper {
  public yesNo: string = 'No';
  checkValue(radio: string) {
    this.yesNo = radio;
    // console.log("🚀 ~ file: panel-wrapper.component.ts ~ line 45 ~ PanelWrapperComponent ~ checkValue ~ this.field", this.field)
    // console.log("🚀 ~ file: panel-wrapper.component.ts ~ line 45 ~ PanelWrapperComponent ~ checkValue ~ this.field", this.model)
    this.model['radio'] = radio;
  }
}
