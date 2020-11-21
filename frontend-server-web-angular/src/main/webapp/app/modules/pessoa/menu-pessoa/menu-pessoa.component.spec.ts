import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPessoaComponent } from './menu-pessoa.component';

describe('MenuPessoaComponent', () => {
    let component: MenuPessoaComponent;
    let fixture: ComponentFixture<MenuPessoaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenuPessoaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuPessoaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
