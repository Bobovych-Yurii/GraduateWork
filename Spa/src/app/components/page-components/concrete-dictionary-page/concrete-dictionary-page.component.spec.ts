import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteDictionaryPageComponent } from './concrete-dictionary-page.component';

describe('ConcreteDictionaryPageComponent', () => {
  let component: ConcreteDictionaryPageComponent;
  let fixture: ComponentFixture<ConcreteDictionaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcreteDictionaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteDictionaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
