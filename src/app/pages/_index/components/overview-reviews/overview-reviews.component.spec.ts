import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewReviewsComponent } from './overview-reviews.component';

describe('OverviewReviewsComponent', () => {
  let component: OverviewReviewsComponent;
  let fixture: ComponentFixture<OverviewReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
