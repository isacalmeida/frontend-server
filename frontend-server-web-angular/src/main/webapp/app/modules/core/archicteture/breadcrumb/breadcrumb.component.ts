import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { RoutingService } from 'src/main/webapp/app/modules/services/architecture/routing/routing.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public breadcrumbs;

  private subscription: Subscription;

  constructor(
    private routingService: RoutingService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.routingService.onChange.subscribe(value => {
      this.breadcrumbs = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}