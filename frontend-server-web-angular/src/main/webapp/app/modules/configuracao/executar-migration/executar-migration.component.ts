import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { SelectItem } from 'primeng/api';

import { ACESSO_SERVICE_V1, OPERACAO_SERVICE_V1, PESSOA_SERVICE_V1, TRANSICAO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';
import { ExecutarMigrationService } from 'src/main/webapp/app/modules/services/common/configuracao/executar-migration.service';

@Component({
    selector: 'app-executar-migration',
    templateUrl: './executar-migration.component.html',
    styleUrls: ['./executar-migration.component.css']
})
export class ExecutarMigrationComponent implements OnInit {

    configurarServiceList: SelectItem[] = [];
    msgs: Message[] = [];
    selecionado: any;
    loading = false;

    constructor(
        public executarmigrationService: ExecutarMigrationService) { }
    
        ngOnInit(): void {
            this.popularConfigurarServiceList();
    }

    popularConfigurarServiceList() {
        this.configurarServiceList.push({ label: 'Acesso', value: { baseUrl: `${ACESSO_SERVICE_V1}`, enumService: 'acessoConfigurarEnumService' } });
        this.configurarServiceList.push({ label: 'Operação', value: { baseUrl: `${OPERACAO_SERVICE_V1}`, enumService: 'operacaoConfigurarEnumService' } });
        this.configurarServiceList.push({ label: 'Pessoa', value: { baseUrl: `${PESSOA_SERVICE_V1}`, enumService: 'pessoaConfigurarEnumService' } });
        this.configurarServiceList.push({ label: 'Transição', value: { baseUrl: `${TRANSICAO_SERVICE_V1}`, enumService: 'transicaoConfigurarEnumService' } });
    }

    realizarMigration() {
        this.loading = true;
        this.executarmigrationService.executar(this.selecionado.baseUrl, this.selecionado.enumService).subscribe(success => {
            this.msgs = [{ severity: 'success', summary: 'Sucesso', detail: 'Registro atualizado!' }];
            this.loading = false;
        }, error => {
            this.msgs = [{ severity: 'error', summary: error.status, detail: error.message }];
            this.loading = false;
        });
    }
}
