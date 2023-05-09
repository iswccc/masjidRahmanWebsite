import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBlockComponent } from './time-block.component';

describe('TimeBlockComponent', () => {
  let component: TimeBlockComponent;
  let fixture: ComponentFixture<TimeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
