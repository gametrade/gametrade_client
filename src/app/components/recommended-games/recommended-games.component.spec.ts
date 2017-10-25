import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedGamesComponent } from './recommended-games.component';

describe('RecommendedGamesComponent', () => {
  let component: RecommendedGamesComponent;
  let fixture: ComponentFixture<RecommendedGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
