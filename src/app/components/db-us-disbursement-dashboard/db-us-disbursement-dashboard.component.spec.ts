import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbUsDisbursementDashboardComponent } from './db-us-disbursement-dashboard.component';

describe('DbUsDisbursementDashboardComponent', () => {
  let component: DbUsDisbursementDashboardComponent;
  let fixture: ComponentFixture<DbUsDisbursementDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbUsDisbursementDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbUsDisbursementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
