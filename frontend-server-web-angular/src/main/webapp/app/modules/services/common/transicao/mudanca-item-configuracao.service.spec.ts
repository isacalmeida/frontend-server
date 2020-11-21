import { TestBed } from '@angular/core/testing';

import { MudancaItemConfiguracaoService } from './mudanca-item-configuracao.service';

describe('MudancaItemConfiguracaoService', () => {
    let service: MudancaItemConfiguracaoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MudancaItemConfiguracaoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
