//#region Imports

// Core
import { Component, OnInit } from '@angular/core';

// Models
import { Theme } from '../../../models/theme';
import { ThemeService } from '../../../services/theme/theme.service';

// Services

//#endregion

@Component({
    selector: 'gametrade-theme-list',
    templateUrl: './theme-list.component.html',
    styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

    categoryList: Theme[] = new Array<Theme>();

    constructor(
        private categoryService: ThemeService
    ) { }

    ngOnInit() {
        this.categoryService.getTheme().subscribe(
            (categories: Theme[]) => {
                this.categoryList = categories;
            }
        );
    }

}
