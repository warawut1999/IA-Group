import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-diamond',
  templateUrl: './print-diamond.component.html',
  styleUrls: ['./print-diamond.component.scss'],
})
export class PrintDiamondComponent implements OnInit {
  numberModel!: number;
  arrModel: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  concantStars(number: number) {
    let stars = '';
    let loop = number;
    if (loop > 1) {
      loop = 2 * (number - 1);
      for (let index = 0; index < loop; index++) {
        stars += '*';
      }
    }
    return stars;
  }

  printDiamond(number: number) {
    for (var i = 1; i <= number; i++) {
      let obj = {
        number: i,
        star: this.concantStars(i),
      };
      this.arrModel.push(obj);
    }
    for (var i = number - 1; i > 0; i--) {
      let obj = {
        number: i,
        star: this.concantStars(i),
      };
      this.arrModel.push(obj);
    }
  }

  submit() {
    this.arrModel = [];
    this.printDiamond(this.numberModel);
  }
}
