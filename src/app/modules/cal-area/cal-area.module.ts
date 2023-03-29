import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalAreaComponent } from './cal-area.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { RouterModule } from '@angular/router';
import { CalulateService } from 'src/app/services/calulate.service';

@NgModule({
  declarations: [CalAreaComponent],
  imports: [
    CommonModule,
    SharedsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalAreaComponent,
      },
    ]),
  ],
  providers: [CalulateService],
})
export class CalAreaModule {}
