import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MapComponent } from '../map/map-area/map-area.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
    active = true;

    constructor(private router: Router) { }

    @Input()
    map: MapComponent;

    sidePanelToggleClicked() {
        this.active = !this.active;
        this.map.updateToggled(this.active);
    }

    activePage(page: string): string {
        return page === this.router.url ? 'active-page' : '';
    }
}
