import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretePostPageComponent } from './concrete-post-page.component';

describe('ConcretePostPageComponent', () => {
  let component: ConcretePostPageComponent;
  let fixture: ComponentFixture<ConcretePostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcretePostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcretePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
