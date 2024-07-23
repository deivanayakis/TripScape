import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhotelviewComponent } from './adhotelview.component';

describe('AdhotelviewComponent', () => {
  let component: AdhotelviewComponent;
  let fixture: ComponentFixture<AdhotelviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhotelviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdhotelviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
