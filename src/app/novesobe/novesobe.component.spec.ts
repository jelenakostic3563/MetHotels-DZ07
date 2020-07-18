import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovesobeComponent } from './novesobe.component';

describe('NovesobeComponent', () => {
  let component: NovesobeComponent;
  let fixture: ComponentFixture<NovesobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovesobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovesobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
