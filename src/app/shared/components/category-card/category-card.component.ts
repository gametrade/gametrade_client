//#region Imports

// Core
import { Component, OnInit, Input } from '@angular/core';

// Models
import { Category } from '../../../models/category';
import { Router } from '@angular/router';

//#endregion

@Component({
    selector: 'gametrade-category-card',
    templateUrl: './category-card.component.html',
    styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

    //#region Properties
    @Input('category') category: Category;

    //#endregion

    constructor(private router: Router) { }

    ngOnInit() {
    }

    // Navigates to the game page
    readMore() {
        this.router.navigate(['/games', this.category.id]);
    }
}
