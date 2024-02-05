import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParNavComponent } from './par-nav.component';

describe('ParNavComponent', () => {
  let component: ParNavComponent;
  let fixture: ComponentFixture<ParNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParNavComponent]
    });
    fixture = TestBed.createComponent(ParNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
