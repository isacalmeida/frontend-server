import { TestBed } from '@angular/core/testing';

import { DetailService } from './detail.service';

describe('DetailService', () => {
    let service: DetailService<any, number, number>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DetailService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
