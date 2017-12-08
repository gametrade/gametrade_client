import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostAccessedGamesComponent } from './most-accessed-games.component';

describe('MostAccessedGamesComponent', () => {
  let component: MostAccessedGamesComponent;
  let fixture: ComponentFixture<MostAccessedGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostAccessedGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostAccessedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
