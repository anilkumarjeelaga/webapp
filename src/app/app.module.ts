import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersModule } from './customers/customers.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsDemoModule } from './forms-demo/forms-demo.module';
import { CoreModule } from './core/core.module';
import { RxDemoModule } from './rx-demo/rx-demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    CustomersModule,
    PortfolioModule,
    ReactiveFormsModule,
    FormsDemoModule,
    CoreModule,
    RxDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
