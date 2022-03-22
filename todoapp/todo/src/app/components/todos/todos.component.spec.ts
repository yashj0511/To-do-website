import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TODOSComponent } from './todos.component';

describe('TODOSComponent', () => {
  let component: TODOSComponent;
  let fixture: ComponentFixture<TODOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TODOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TODOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
