import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewPageComponent } from './crew-page.component';

describe('CrewPageComponent', () => {
  let component: CrewPageComponent;
  let fixture: ComponentFixture<CrewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
