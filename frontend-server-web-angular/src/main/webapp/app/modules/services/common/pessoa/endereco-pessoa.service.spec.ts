import { TestBed } from '@angular/core/testing';

import { EnderecoPessoaService } from './endereco-pessoa.service';

describe('EnderecoPessoaService', () => {
    let service: EnderecoPessoaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EnderecoPessoaService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
