import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduppackageComponent } from './aduppackage.component';

describe('AduppackageComponent', () => {
  let component: AduppackageComponent;
  let fixture: ComponentFixture<AduppackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AduppackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AduppackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
