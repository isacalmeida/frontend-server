import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/security/authentication.service';
import { UsuarioDTO } from '../../shared/common/acesso/usuario.dto';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    currentUser: UsuarioDTO;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) {

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit(): void {
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
