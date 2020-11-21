import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAcessoComponent } from './menu-acesso.component';

describe('MenuAcessoComponent', () => {
    let component: MenuAcessoComponent;
    let fixture: ComponentFixture<MenuAcessoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenuAcessoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuAcessoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
