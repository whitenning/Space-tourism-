import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyPageComponent } from './technology-page.component';

describe('TechnologyPageComponent', () => {
  let component: TechnologyPageComponent;
  let fixture: ComponentFixture<TechnologyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
