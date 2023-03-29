import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedsModule } from 'src/app/shareds/shareds.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
})
export class DashboardModule {}
