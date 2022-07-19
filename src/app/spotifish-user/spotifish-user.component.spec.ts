import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifishUserComponent } from './spotifish-user.component';

describe('SpotifishUserComponent', () => {
  let component: SpotifishUserComponent;
  let fixture: ComponentFixture<SpotifishUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifishUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifishUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
