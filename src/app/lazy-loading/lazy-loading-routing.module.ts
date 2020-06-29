import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyListComponent } from './lazy-list/lazy-list.component';

const routes: Routes = [{ path: '', component: LazyListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadingRoutingModule {}
