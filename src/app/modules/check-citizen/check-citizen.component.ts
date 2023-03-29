import { Component, OnInit } from '@angular/core';
import { ICitizen } from 'src/app/interfaces/citizen.interface';

@Component({
  selector: 'app-check-citizen',
  templateUrl: './check-citizen.component.html',
  styleUrls: ['./check-citizen.component.scss'],
})
export class CheckCitizenComponent implements OnInit {
  citizenModel: string = '5997624967173';

  modelCheckCitizen!: ICitizen;

  constructor() {}

  ngOnInit(): void {}

  splitIntoArray(num: any) {
    return Array.from(String(num), Number);
  }

  onChecking() {
    let response: ICitizen;
    if (!this.citizenModel) {
      response = {
        success: false,
        error_code: '001',
        error_msg: 'citizen_id require',
      };
      return response;
    } else if (this.citizenModel.length !== 13) {
      response = {
        success: false,
        error_code: '001',
        error_msg: 'citizen_id invalid',
      };
      return response;
    }
    let splitLastIndex = this.citizenModel.slice(0, 12);
    const arr = this.splitIntoArray(splitLastIndex);
    let numberIndex = this.citizenModel.length;
    let summary = 0;
    arr.forEach((i) => {
      summary += i * numberIndex;
      numberIndex -= 1;
    });
    let modulo = summary % 11;
    let digit = 11 - modulo;
    if (digit > 9) {
      digit = digit % 10;
    }
    response = {
      success: true,
      error_code: '200',
      error_msg: '',
      digit: digit,
    };
    console.log('Check Digit: ', digit);

    return response;
  }

  submit() {
    this.modelCheckCitizen = this.onChecking();
    console.log(this.modelCheckCitizen);
  }
}
