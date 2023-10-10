import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TariffModel } from '../models';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _mockService: MockService) {}

  getTariffList() {
    return this._mockService.getMockData<TariffModel>('tariff').pipe(
      map((data) => {
        // Generate mock data
        const tariffList = [];
        for (let i = 0; i < 10; i++) {
          const newObj = Object.assign({}, data);
          newObj.name = `${newObj.name} ${i}`;
          newObj.price = newObj.price + i;
          newObj.downloadSpeed = newObj.downloadSpeed + i;
          newObj.uploadSpeed = newObj.uploadSpeed + i;

          tariffList.push(newObj);
        }
        return tariffList;
      }),
    );
  }
}
