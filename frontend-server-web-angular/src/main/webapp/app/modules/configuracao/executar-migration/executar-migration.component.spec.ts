import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutarMigrationComponent } from './executar-migration.component';

describe('ExecutarMigrationComponent', () => {
    let component: ExecutarMigrationComponent;
    let fixture: ComponentFixture<ExecutarMigrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExecutarMigrationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExecutarMigrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
