import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { PostsService } from 'src/app/services/posts.service';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    SharedsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostComponent,
      },
    ]),
  ],
  providers: [PostsService],
})
export class PostModule {}
