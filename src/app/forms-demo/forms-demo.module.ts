import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './reactive/form-control/form-control.component';
import { FormArrayComponent } from './reactive/form-array/form-array.component';
import { FormGroupComponent } from './reactive/form-group/form-group.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NestedFormGroupComponent } from './reactive/nested-form-group/nested-form-group.component';
import { FormBuilderComponent } from './reactive/form-builder/form-builder.component';
import { ReactiveFormValidationComponent } from './reactive/reactive-form-validation/reactive-form-validation.component';

@NgModule({
  declarations: [FormControlComponent, FormArrayComponent, FormGroupComponent, NestedFormGroupComponent, FormBuilderComponent, ReactiveFormValidationComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class FormsDemoModule {}
