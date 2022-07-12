import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifishComponent } from './spotifish.component';

describe('SpotifishComponent', () => {
  let component: SpotifishComponent;
  let fixture: ComponentFixture<SpotifishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
