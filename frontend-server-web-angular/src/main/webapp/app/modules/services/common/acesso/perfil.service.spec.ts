import { TestBed } from '@angular/core/testing';

import { PerfilService } from './perfil.service';

describe('PessoaFisicaService', () => {
    let service: PerfilService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PerfilService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
