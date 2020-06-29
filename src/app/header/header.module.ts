import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EagerLoadingComponent } from './eager-loading/eager-loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdPopoverTplcontent } from './popover-tplcontent';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RxDemoModule } from '../rx-demo/rx-demo.module';

// import { NgbdPopoverTplcontent } from './popover-tplcontent';

@NgModule({
  declarations: [
    HomeComponent,
    ContactusComponent,
    EagerLoadingComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, RxDemoModule],
  // exports: [  NgbdPopoverTplcontent  ]
})
export class HeaderModule {}
