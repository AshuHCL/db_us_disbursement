import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbUsDisbursementHeaderComponent } from './db-us-disbursement-header.component';

describe('DbUsDisbursementHeaderComponent', () => {
  let component: DbUsDisbursementHeaderComponent;
  let fixture: ComponentFixture<DbUsDisbursementHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbUsDisbursementHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbUsDisbursementHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
