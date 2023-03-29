import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintDiamondComponent } from './print-diamond.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PrintDiamondComponent
  ],
  imports: [
    CommonModule,
    SharedsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrintDiamondComponent,
      },
    ]),
  ]
})
export class PrintDiamondModule { }
