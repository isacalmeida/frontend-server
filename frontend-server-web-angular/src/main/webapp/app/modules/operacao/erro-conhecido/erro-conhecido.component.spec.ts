import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroConhecidoComponent } from './erro-conhecido.component';

describe('ErroConhecidoComponent', () => {
    let component: ErroConhecidoComponent;
    let fixture: ComponentFixture<ErroConhecidoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ErroConhecidoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ErroConhecidoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
