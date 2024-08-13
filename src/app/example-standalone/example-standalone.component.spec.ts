import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleStandaloneComponent } from './example-standalone.component';

describe('ExampleStandaloneComponent', () => {
  let component: ExampleStandaloneComponent;
  let fixture: ComponentFixture<ExampleStandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleStandaloneComponent]
    });
    fixture = TestBed.createComponent(ExampleStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
