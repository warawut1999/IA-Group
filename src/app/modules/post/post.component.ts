import { Component, OnInit } from '@angular/core';
import { IPosts } from 'src/app/interfaces/posts.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  objectModel!: IPosts[];

  constructor(private _service: PostsService) {
    this.initlizeLoadData();
  }

  ngOnInit(): void {}

  initlizeLoadData() {
    this._service.getDataformApi().subscribe((res) => (this.objectModel = res));
  }
}
