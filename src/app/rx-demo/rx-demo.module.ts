import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { ColorfulTextComponent } from './colorful-text/colorful-text.component';
import { ColorInputComponent } from './color-input/color-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ObservablesDemoComponent,
    SubjectDemoComponent,
    ColorfulTextComponent,
    ColorInputComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [ObservablesDemoComponent, SubjectDemoComponent],
})
export class RxDemoModule {}
