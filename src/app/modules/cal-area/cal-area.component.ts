import { Component, OnInit } from '@angular/core';
import { CalulateService } from 'src/app/services/calulate.service';

@Component({
  selector: 'app-cal-area',
  templateUrl: './cal-area.component.html',
  styleUrls: ['./cal-area.component.scss'],
})
export class CalAreaComponent implements OnInit {
  baseModel!: number;
  heightModel!: number;
  areaModel!: number;

  constructor(private _service: CalulateService) {}

  ngOnInit(): void {
    this._service.getData().subscribe((res) => console.log(res));
  }

  calculate() {
    this._service
      .postCalculateArea(this.baseModel, this.heightModel)
      .subscribe((res) => {
        let data = res.data;
        this.areaModel = data.Area;
        console.log(res);
        
      });
  }
}
