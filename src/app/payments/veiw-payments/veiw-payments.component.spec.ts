import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwPaymentsComponent } from './veiw-payments.component';

describe('VeiwPaymentsComponent', () => {
  let component: VeiwPaymentsComponent;
  let fixture: ComponentFixture<VeiwPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
