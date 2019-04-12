
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaDashboardComponent } from './minha-dashboard.component';

describe('MinhaDashboardComponent', () => {
  let component: MinhaDashboardComponent;
  let fixture: ComponentFixture<MinhaDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
