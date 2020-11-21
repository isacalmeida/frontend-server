import { TestBed } from '@angular/core/testing';

import { TipoEnderecoService } from './tipo-endereco.service';

describe('TipoEnderecoService', () => {
    let service: TipoEnderecoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TipoEnderecoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
