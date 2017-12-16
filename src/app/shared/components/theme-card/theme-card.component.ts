//#region Imports

// Core
import { Component, OnInit, Input } from '@angular/core';

// Models
import { Theme } from '../../../models/theme';
import { Router } from '@angular/router';

//#endregion

@Component({
    selector: 'gametrade-theme-card',
    templateUrl: './theme-card.component.html',
    styleUrls: ['./theme-card.component.scss']
})
export class ThemeCardComponent implements OnInit {

    //#region Properties
    @Input('theme') theme: Theme;

    //#endregion

    constructor(private router: Router) { }

    ngOnInit() {
    }

    // Navigates to the game page
    readMore() {
        this.router.navigate(['/games', this.theme.id]);
    }
}
