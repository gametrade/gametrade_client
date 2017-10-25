import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
    selector: 'most-searched-games',
    templateUrl: './most-searched-games.component.html',
    styleUrls: ['./most-searched-games.component.scss']
})
export class MostSearchedGamesComponent implements OnInit {
    public mostSearchedGames: Array<Game>; 

    constructor() { }

    ngOnInit() {
        this.mostSearchedGames = [
            <Game> {
                id: '1',
                name: 'Arcadia',
                players: [4, 8],
                owner: {
                    name: 'Jorge',
                    email: 'jorgeta@bololo.com',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                },
                rating: 4.4,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.',
                thumbnail: 'http://lorempixel.com/800/450/nature/'
            },
            <Game> {
                id: '2',
                name: 'Krosmaster',
                players: [3, 6],
                owner: {
                    name: 'Erik',
                    email: 'jorgeta@bololo.com',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                },
                rating: 4.8,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.',
                thumbnail: 'http://lorempixel.com/800/450/nature/'
            },
            <Game> {
                id: '3',
                name: 'Truco do Odinha',
                players: [2, 4],
                owner: {
                    name: 'Odair',
                    email: 'jorgeta@bololo.com',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                },
                rating: 4.9,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.',
                thumbnail: 'http://lorempixel.com/800/450/nature/'
            },
            <Game> {
                id: '4',
                name: 'Banco imobiliário',
                players: [2, 8],
                owner: {
                    name: 'Caioba',
                    email: 'jorgeta@bololo.com',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                },
                rating: 5.0,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.',
                thumbnail: 'http://lorempixel.com/800/450/nature/'
            }
        ];
    }

}
