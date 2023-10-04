import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaPrincipalPage } from './area-principal.page';

describe('AreaPrincipalPage', () => {
  let component: AreaPrincipalPage;
  let fixture: ComponentFixture<AreaPrincipalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AreaPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
