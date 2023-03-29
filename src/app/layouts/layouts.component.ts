import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../configs/app.config';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
})
export class LayoutsComponent extends AppConfig implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
