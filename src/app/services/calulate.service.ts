import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CalulateService {

  area!: number;
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get<any>('/api/getArea');
  }

  postCalculateArea(base: number, height: number) {
    return this._http.post<any>(`/api/calculate?base=${base}&height=${height}`, '');
  }
}
