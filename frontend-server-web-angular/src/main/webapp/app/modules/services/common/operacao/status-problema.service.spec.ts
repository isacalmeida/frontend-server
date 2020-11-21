import { TestBed } from '@angular/core/testing';

import { StatusProblemaService } from './status-problema.service';

describe('StatusProblemaService', () => {
    let service: StatusProblemaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StatusProblemaService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
