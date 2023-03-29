import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckCitizenComponent } from './check-citizen.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CheckCitizenComponent],
  imports: [
    CommonModule,
    SharedsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckCitizenComponent,
      },
    ]),
  ],
})
export class CheckCitizenModule {}
