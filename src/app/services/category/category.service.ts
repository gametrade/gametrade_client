import { Injectable } from '@angular/core';
import { Category } from '../../models/category';
import { Observable } from 'rxjs/Observable';

const categories: Category[] = [
    {
        id: 1,
        name: 'RPG',
        description: 'Jogos em que você representa o papel de um personagem fictício.'
    }
];

@Injectable()
export class CategoryService {

    constructor() { }

    getCategory(id?: number): Observable<Category[]> {
        return Observable.of(categories.filter(
            (category: Category) => id ? category.id === id : true
        ));
    }
}
