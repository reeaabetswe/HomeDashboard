import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDashboardPage } from './home-dashboard.page';

describe('HomeDashboardPage', () => {
  let component: HomeDashboardPage;
  let fixture: ComponentFixture<HomeDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
