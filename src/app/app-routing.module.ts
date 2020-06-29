import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { ContactusComponent } from './header/contactus/contactus.component';
import { PageNotFoundComponent } from './header/page-not-found/page-not-found.component';
import { EagerLoadingComponent } from './header/eager-loading/eager-loading.component';
import { CareerComponent } from './portfolio/career/career.component';
import { FormControlComponent } from './forms-demo/reactive/form-control/form-control.component';
import { FormGroupComponent } from './forms-demo/reactive/form-group/form-group.component';
import { NestedFormGroupComponent } from './forms-demo/reactive/nested-form-group/nested-form-group.component';
import { FormBuilderComponent } from './forms-demo/reactive/form-builder/form-builder.component';
import { FormArrayComponent } from './forms-demo/reactive/form-array/form-array.component';
import { ReactiveFormValidationComponent } from './forms-demo/reactive/reactive-form-validation/reactive-form-validation.component';
import { ObservablesDemoComponent } from './rx-demo/observables-demo/observables-demo.component';
import { SubjectDemoComponent } from './rx-demo/subject-demo/subject-demo.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'eager-loading', component: EagerLoadingComponent },
  { path: 'about', component: CareerComponent },
  { path: 'reactive/form-control', component: FormControlComponent },
  { path: 'reactive/form-group', component: FormGroupComponent },
  { path: 'reactive/nested-form-group', component: NestedFormGroupComponent },
  { path: 'reactive/form-builder', component: FormBuilderComponent },
  { path: 'reactive/form-array', component: FormArrayComponent },
  {
    path: 'reactive/reactive-form-validation',
    component: ReactiveFormValidationComponent,
  },
  { path: 'observables', component: ObservablesDemoComponent },
  { path: 'observables/subject', component: SubjectDemoComponent },
  // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
  // lazy-loading-pages
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  /* Default path and wild match routes */
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
