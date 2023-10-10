import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TariffListComponent } from './tariff-list/tariff-list.component';
import { TariffRoutingModule } from './tariff-routing.module';

@NgModule({
  declarations: [TariffListComponent],
  imports: [CommonModule, TariffRoutingModule, FormsModule, ReactiveFormsModule],
})
export class TariffModule {}
