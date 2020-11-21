import { TestBed } from '@angular/core/testing';

import { TipoDocumentoPessoaService } from './tipo-documento-pessoa.service';

describe('TipoDocumentoPessoaService', () => {
    let service: TipoDocumentoPessoaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TipoDocumentoPessoaService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
