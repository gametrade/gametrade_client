//#region Imports

// Core
import { Component, OnInit, Input } from '@angular/core';

// Models
import { Category } from '../../../models/category';

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

    constructor() { }

    ngOnInit() {
    }

}
