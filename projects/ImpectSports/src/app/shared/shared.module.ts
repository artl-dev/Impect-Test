import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatGridListModule,
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatGridListModule,
    MatCardModule,
  ],
})
export class SharedModule {}
