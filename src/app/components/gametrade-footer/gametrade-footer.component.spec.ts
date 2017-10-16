import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtFooterComponent } from './gt-footer.component';

describe('GtFooterComponent', () => {
  let component: GtFooterComponent;
  let fixture: ComponentFixture<GtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
