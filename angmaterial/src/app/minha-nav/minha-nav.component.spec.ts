
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaNavComponent } from './minha-nav.component';

describe('MinhaNavComponent', () => {
  let component: MinhaNavComponent;
  let fixture: ComponentFixture<MinhaNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
