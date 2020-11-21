import { TestBed } from '@angular/core/testing';

import { ItemConfiguracaoService } from './item-configuracao.service';

describe('ItemConfiguracaoService', () => {
    let service: ItemConfiguracaoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ItemConfiguracaoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
