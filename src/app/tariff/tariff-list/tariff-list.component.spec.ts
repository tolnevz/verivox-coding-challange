import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewListComponent } from './tariff-list.component';

describe('TariffListComponent', () => {
  let component: ReviewListComponent;
  let fixture: ComponentFixture<ReviewListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewListComponent]
    });
    fixture = TestBed.createComponent(ReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
