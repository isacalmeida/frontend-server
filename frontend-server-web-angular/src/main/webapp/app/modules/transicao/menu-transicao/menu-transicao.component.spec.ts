import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTransicaoComponent } from './menu-transicao.component';

describe('MenuTransicaoComponent', () => {
    let component: MenuTransicaoComponent;
    let fixture: ComponentFixture<MenuTransicaoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenuTransicaoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuTransicaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
