import { TestBed } from '@angular/core/testing';

import { StatusRequisicaoService } from './status-requisicao.service';

describe('StatusRequisicaoService', () => {
    let service: StatusRequisicaoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StatusRequisicaoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
