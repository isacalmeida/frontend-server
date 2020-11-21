import { TestBed } from '@angular/core/testing';

import { GeneroPessoaService } from './genero-pessoa.service';

describe('GeneroPessoaService', () => {
    let service: GeneroPessoaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GeneroPessoaService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
