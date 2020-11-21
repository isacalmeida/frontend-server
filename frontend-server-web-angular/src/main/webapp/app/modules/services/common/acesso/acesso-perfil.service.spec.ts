import { TestBed } from '@angular/core/testing';

import { AcessoPerfilService } from './acesso-perfil.service';

describe('AcessoPerfilService', () => {
    let service: AcessoPerfilService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AcessoPerfilService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
