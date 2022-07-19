import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifishArtistComponent } from './spotifish-artist.component';

describe('SpotifishArtistComponent', () => {
  let component: SpotifishArtistComponent;
  let fixture: ComponentFixture<SpotifishArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifishArtistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifishArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
