import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career/career.component';
import { CustomersModule } from '../customers/customers.module';
import { RxDemoModule } from '../rx-demo/rx-demo.module';
@NgModule({
  declarations: [CareerComponent],
  imports: [CommonModule, CustomersModule, RxDemoModule],
})
export class PortfolioModule {}
