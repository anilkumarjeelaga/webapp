// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { UtilService } from './util.service';

// @NgModule({
//   declarations: [],
//   imports: [CommonModule, UtilService],
// })
// export class CoreModule {}

import { NgModule } from '@angular/core';

import { UtilService } from './util.service';

@NgModule({
  providers: [UtilService],
})
export class CoreModule {}
