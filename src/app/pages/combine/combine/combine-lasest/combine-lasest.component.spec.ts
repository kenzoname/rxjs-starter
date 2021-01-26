import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLasestComponent } from './combine-lasest.component';

describe('CombineLasestComponent', () => {
  let component: CombineLasestComponent;
  let fixture: ComponentFixture<CombineLasestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineLasestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLasestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
