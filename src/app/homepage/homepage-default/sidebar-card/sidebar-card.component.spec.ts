import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCardComponent } from './sidebar-card.component';

describe('SidebarCardComponent', () => {
  let component: SidebarCardComponent;
  let fixture: ComponentFixture<SidebarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarCardComponent]
    });
    fixture = TestBed.createComponent(SidebarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
