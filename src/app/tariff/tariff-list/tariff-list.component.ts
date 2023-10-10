import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, debounceTime, startWith, takeUntil, tap } from 'rxjs';
import { TariffModel } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
})
export class TariffListComponent implements OnInit, OnDestroy {
  tariffList: TariffModel[] = [];
  filteredTariffList: TariffModel[] = [];
  readonly tariffFilterControl = new FormControl<string | TariffModel>('');
  private readonly _componentDestroyed$ = new ReplaySubject<void>(1);

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.tariffFilterControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        tap((value) => {
          // filter tariffList by value
          const filterFn = (value: string) =>
            this.tariffList.filter(
              (t) =>
                t.name.toLowerCase().includes(value.toLowerCase()) ||
                t.downloadSpeed === Number(value) ||
                t.uploadSpeed === Number(value) ||
                t.price === Number(value),
            );
          this.filteredTariffList = value && typeof value === 'string' ? filterFn(value) : this.tariffList;
        }),
        takeUntil(this._componentDestroyed$),
      )
      .subscribe();

    this.httpService
      .getTariffList()
      .pipe(
        tap((data) => {
          this.tariffList = data;
          this.filteredTariffList = this.tariffList;
        }),
        takeUntil(this._componentDestroyed$),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._componentDestroyed$.next();
    this._componentDestroyed$.complete();
  }
}
