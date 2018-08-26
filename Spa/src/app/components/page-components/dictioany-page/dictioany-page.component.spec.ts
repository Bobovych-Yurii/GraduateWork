import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictioanyPageComponent } from './dictioany-page.component';

describe('DictioanyPageComponent', () => {
  let component: DictioanyPageComponent;
  let fixture: ComponentFixture<DictioanyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictioanyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictioanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
