import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/configs/app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends AppConfig implements OnInit {
  
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
