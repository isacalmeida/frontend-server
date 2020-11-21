import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemConfiguracaoComponent } from './item-configuracao.component';

describe('ItemConfiguracaoComponent', () => {
    let component: ItemConfiguracaoComponent;
    let fixture: ComponentFixture<ItemConfiguracaoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemConfiguracaoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemConfiguracaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
