import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSearchedGamesComponent } from './most-searched-games.component';

describe('MostSearchedGamesComponent', () => {
  let component: MostSearchedGamesComponent;
  let fixture: ComponentFixture<MostSearchedGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostSearchedGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSearchedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
