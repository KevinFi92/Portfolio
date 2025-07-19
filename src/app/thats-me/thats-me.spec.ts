import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThatsMe } from './thats-me';

describe('ThatsMe', () => {
  let component: ThatsMe;
  let fixture: ComponentFixture<ThatsMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThatsMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThatsMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
