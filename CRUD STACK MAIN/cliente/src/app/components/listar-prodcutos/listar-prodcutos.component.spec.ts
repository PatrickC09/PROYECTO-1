import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdcutosComponent } from './listar-prodcutos.component';

describe('ListarProdcutosComponent', () => {
  let component: ListarProdcutosComponent;
  let fixture: ComponentFixture<ListarProdcutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProdcutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProdcutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
