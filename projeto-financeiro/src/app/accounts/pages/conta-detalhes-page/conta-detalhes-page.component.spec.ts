import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaDetalhesPageComponent } from './conta-detalhes-page.component';

describe('ContaDetalhesPageComponent', () => {
  let component: ContaDetalhesPageComponent;
  let fixture: ComponentFixture<ContaDetalhesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaDetalhesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaDetalhesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
