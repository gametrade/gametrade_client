//#region Imports

// Core
import { Component, OnInit } from '@angular/core';

// Models
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category/category.service';

// Services

//#endregion

@Component({
    selector: 'gametrade-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

    categoryList: Category[] = new Array<Category>();

    constructor(
        private categoryService: CategoryService
    ) { }

    ngOnInit() {
        this.categoryService.getCategory().subscribe(
            (categories: Category[]) => {
                this.categoryList = categories;
            }
        );
    }

}
