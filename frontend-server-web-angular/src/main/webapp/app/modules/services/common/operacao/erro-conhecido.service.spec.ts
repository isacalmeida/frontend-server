import { TestBed } from '@angular/core/testing';

import { ErroConhecidoService } from './erro-conhecido.service';

describe('ErroConhecidoService', () => {
    let service: ErroConhecidoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ErroConhecidoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
