import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyListComponent } from './lazy-list/lazy-list.component';

@NgModule({
  declarations: [LazyListComponent],
  imports: [CommonModule, LazyLoadingRoutingModule],
})
export class LazyLoadingModule {}
