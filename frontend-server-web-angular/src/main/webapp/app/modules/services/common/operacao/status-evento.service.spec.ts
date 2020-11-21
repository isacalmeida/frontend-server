import { TestBed } from '@angular/core/testing';

import { StatusEventoService } from './status-evento.service';

describe('StatusEventoService', () => {
    let service: StatusEventoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StatusEventoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
