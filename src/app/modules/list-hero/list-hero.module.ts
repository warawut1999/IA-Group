import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroComponent } from './list-hero.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListHeroComponent],
  imports: [
    CommonModule,
    SharedsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListHeroComponent,
      },
    ]),
  ],
})
export class ListHeroModule {}
