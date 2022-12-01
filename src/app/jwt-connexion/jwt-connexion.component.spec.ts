import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtConnexionComponent } from './jwt-connexion.component';

describe('JwtConnexionComponent', () => {
  let component: JwtConnexionComponent;
  let fixture: ComponentFixture<JwtConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtConnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JwtConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
