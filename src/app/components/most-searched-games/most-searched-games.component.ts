import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'most-searched-games',
    templateUrl: './most-searched-games.component.html',
    styleUrls: ['./most-searched-games.component.scss']
})
export class MostSearchedGamesComponent implements OnInit {
    public mostSearchedGames: Array<any> = [
        {
            name: "Arcadia",
            players: [4, 8],
            owner: "Jorge",
            rating: 4.4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.",
            thumbnail: "http://via.placeholder.com/700x300"
        },
        {
            name: "Krosmaster",
            players: [3, 6],
            owner: "Erik",
            rating: 4.8,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.",
            thumbnail: "http://via.placeholder.com/700x300"
        },
        {
            name: "Truco do Odinha",
            players: [2, 4],
            owner: "Odair",
            rating: 4.9,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.",
            thumbnail: "http://via.placeholder.com/700x300"
        },
        {
            name: "Banco imobiliário",
            players: [2, 8],
            owner: "Caioba",
            rating: 5.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.",
            thumbnail: "http://via.placeholder.com/700x300"
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
