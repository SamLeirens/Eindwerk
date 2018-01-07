import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AangemaaktProjectComponent } from './aangemaakt-project.component';

describe('AangemaaktProjectComponent', () => {
  let component: AangemaaktProjectComponent;
  let fixture: ComponentFixture<AangemaaktProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AangemaaktProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AangemaaktProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
