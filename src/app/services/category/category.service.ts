import { Injectable } from '@angular/core';
import { Category } from '../../models/category';
import { Observable } from 'rxjs/Observable';

const categories: Category[] = [
    {
        id: 1,
        name: 'RPG',
        description: 'Jogos em que você representa o papel de um personagem fictício.'
    },
    {
        id: 2,
        name: 'Cassino',
        description: 'Jogos em que você deve ganhar dinheiro.'
    },
    {
        id: 3,
        name: 'Crime',
        description: 'Jogos em que você representa o papel de um criminoso.'
    },
    {
        id: 4,
        name: 'Festa',
        description: 'Jogos para jogar em festas.'
    },
    {
        id: 5,
        name: 'Aventura',
        description: 'Aqui você embarca em aventuras fantásticas para desvendar mistérios.'
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
