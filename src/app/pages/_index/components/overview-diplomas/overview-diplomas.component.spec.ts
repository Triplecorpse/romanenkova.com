import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDiplomasComponent } from './overview-diplomas.component';

describe('OverviewDiplomasComponent', () => {
  let component: OverviewDiplomasComponent;
  let fixture: ComponentFixture<OverviewDiplomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewDiplomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDiplomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
