import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduptrainComponent } from './aduptrain.component';

describe('AduptrainComponent', () => {
  let component: AduptrainComponent;
  let fixture: ComponentFixture<AduptrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AduptrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AduptrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
