import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExosAlgoTsComponent } from './exos-algo-ts.component';

describe('ExosAlgoTsComponent', () => {
  let component: ExosAlgoTsComponent;
  let fixture: ComponentFixture<ExosAlgoTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExosAlgoTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExosAlgoTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
