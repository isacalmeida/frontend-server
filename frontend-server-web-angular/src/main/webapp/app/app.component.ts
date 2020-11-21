import { Component, OnInit } from '@angular/core';
import { RoutingState } from './modules/services/architecture/routing/routing-state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'frontend-server';
    public customLayout: boolean;

    constructor(
        private routingState: RoutingState) { }

    ngOnInit() {
        this.routingState.loadRouting();
    }
}
