import { TestBed } from '@angular/core/testing';

import { TipoItemConfiguracaoService } from './tipo-item-configuracao.service';

describe('TipoItemConfiguracaoService', () => {
    let service: TipoItemConfiguracaoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TipoItemConfiguracaoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
