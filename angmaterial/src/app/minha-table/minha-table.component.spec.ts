
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaTableComponent } from './minha-table.component';

describe('MinhaTableComponent', () => {
  let component: MinhaTableComponent;
  let fixture: ComponentFixture<MinhaTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
