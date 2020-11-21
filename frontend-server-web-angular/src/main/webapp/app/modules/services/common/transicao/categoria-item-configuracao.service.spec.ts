import { TestBed } from '@angular/core/testing';

import { CategoriaItemConfiguracaoService } from './categoria-item-configuracao.service';

describe('ItemConfiguracaoSeCategoriaItemConfiguracaoServicervice', () => {
    let service: CategoriaItemConfiguracaoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CategoriaItemConfiguracaoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
