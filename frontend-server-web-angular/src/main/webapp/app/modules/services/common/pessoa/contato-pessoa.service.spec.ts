import { TestBed } from '@angular/core/testing';

import { ContatoPessoaService } from './contato-pessoa.service';

describe('ContatoPessoaService', () => {
    let service: ContatoPessoaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ContatoPessoaService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
