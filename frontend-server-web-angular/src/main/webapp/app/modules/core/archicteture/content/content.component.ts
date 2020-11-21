import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { RoutingService } from 'src/main/webapp/app/modules/services/architecture/routing/routing.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit, OnDestroy {

    public description: string;
    public header: string;
    public titleTag: string;
    public heightStyle: number;
    public sidebarLeftHeight: number;
    public windowInnerHeight: number;

    private layout: string;
    private navigationEnd: boolean;
    private subscriptions = [];

    constructor(
        private routingService: RoutingService,
        private titleService: Title,
        private elementRef: ElementRef,
        private changeDetectorRef: ChangeDetectorRef,
        private router: Router
    ) { }

    ngOnInit() {
        this.titleTag = this.titleService.getTitle();

        this.subscriptions.push(this.routingService.onChange.subscribe((value: any) => {
            if (value && value[value.length - 1] && value[value.length - 1].data) {
                const data = value[value.length - 1].data;

                this.titleService.setTitle(this.getTitle(data.title));
                this.header = data.title;
                this.titleTag = data.titleTag;
                this.description = data.description;
            }
            this.changeDetectorRef.markForCheck();
        }));

        this.subscriptions.push(this.router.events.subscribe((routeEvent: RouterEvent) => {
            if (routeEvent instanceof NavigationStart) {
                this.navigationEnd = false;
            }
            if (routeEvent instanceof NavigationEnd) {
                this.navigationEnd = true;
            }
        }));

        this.heightStyle = this.windowInnerHeight;
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }

    getTitleWithTag(): string {
        return this.titleTag === undefined ? this.header : `${this.titleTag} - ${this.header}`;
    }

    private getTitle(title: string): string {
        return title ? title : this.titleTag;
    }
}
