import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbUsDisbursementSidenavComponent } from './db-us-disbursement-sidenav.component';

describe('DbUsDisbursementSidenavComponent', () => {
  let component: DbUsDisbursementSidenavComponent;
  let fixture: ComponentFixture<DbUsDisbursementSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbUsDisbursementSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbUsDisbursementSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
