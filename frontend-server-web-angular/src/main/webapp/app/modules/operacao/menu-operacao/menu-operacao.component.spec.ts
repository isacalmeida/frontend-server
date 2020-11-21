import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOperacaoComponent } from './menu-operacao.component';

describe('MenuOperacaoComponent', () => {
    let component: MenuOperacaoComponent;
    let fixture: ComponentFixture<MenuOperacaoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenuOperacaoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuOperacaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
