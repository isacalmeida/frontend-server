import { TestBed } from '@angular/core/testing';

import { StatusItemConfiguracaoService } from './status-item-configuracao.service';

describe('StatusItemConfiguracaoService', () => {
    let service: StatusItemConfiguracaoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StatusItemConfiguracaoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
