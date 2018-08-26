import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseExervisePageComponent } from './base-exervise-page.component';

describe('BaseExervisePageComponent', () => {
  let component: BaseExervisePageComponent;
  let fixture: ComponentFixture<BaseExervisePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseExervisePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseExervisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
