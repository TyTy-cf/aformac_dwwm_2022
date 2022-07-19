import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifishPlaylistComponent } from './spotifish-playlist.component';

describe('SpotifishPlaylistComponent', () => {
  let component: SpotifishPlaylistComponent;
  let fixture: ComponentFixture<SpotifishPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifishPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifishPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
