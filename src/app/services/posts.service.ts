import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts } from '../interfaces/posts.interface';

@Injectable()
export class PostsService {
  private API = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private _http: HttpClient) {}

  getDataformApi() {
    return this._http.get<IPosts[]>(this.API);
  }
}
