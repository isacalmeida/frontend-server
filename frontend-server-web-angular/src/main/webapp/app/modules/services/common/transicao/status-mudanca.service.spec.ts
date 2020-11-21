import { TestBed } from '@angular/core/testing';

import { StatusMudancaService } from './status-mudanca.service';

describe('StatusMudancaService', () => {
    let service: StatusMudancaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StatusMudancaService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
