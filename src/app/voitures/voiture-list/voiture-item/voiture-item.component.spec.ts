import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureItemComponent } from './voiture-item.component';

describe('VoitureItemComponent', () => {
  let component: VoitureItemComponent;
  let fixture: ComponentFixture<VoitureItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoitureItemComponent]
    });
    fixture = TestBed.createComponent(VoitureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
