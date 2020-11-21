import { TestBed } from '@angular/core/testing';

import { StatusIncidenteService } from './status-incidente.service';

describe('StatusIncidenteService', () => {
    let service: StatusIncidenteService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StatusIncidenteService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
