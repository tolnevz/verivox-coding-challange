import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private configService: ConfigService, private _http: HttpClient) { }

  getMockData<T>(entity: string) {
    return this._http.get<T>(`${this.configService.getMockPathPrefix()}/${entity}.json`)
  }
}
