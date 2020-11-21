import { TestBed } from '@angular/core/testing';

import { ImpactoService } from './impacto.service';

describe('ImpactoService', () => {
    let service: ImpactoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ImpactoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
