//#region Imports
// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Services
import { Angular2TokenService } from 'angular2-token';

// Models
import { Game, InsertedGame } from '../../models/game';

//#endregion

@Injectable()
export class GameService {

    constructor(private tokenHttp: Angular2TokenService) { }

    getMyGames(): Observable<Array<Game>> {
        return Observable.of(
            [
                <Game>{
                    id: '1',
                    name: 'Arcadia',
                    players: [4, 8],
                    owner: {
                        name: 'Jorge',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 4.43,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                },
                <Game>{
                    id: '2',
                    name: 'Krosmaster',
                    players: [3, 6],
                    owner: {
                        name: 'Erik',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 4.83,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                },
                <Game>{
                    id: '3',
                    name: 'Truco do Odinha',
                    players: [2, 4],
                    owner: {
                        name: 'Odair',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 4.93,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                },
                <Game>{
                    id: '4',
                    name: 'Banco imobiliário',
                    players: [2, 8],
                    owner: {
                        name: 'Caioba',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 5.03,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                }
            ]
        );
    }

    getRecommendedGames(): Observable<Array<Game>> {
        return Observable.of(
            [
                <Game>{
                    id: '1',
                    name: 'Arcadia',
                    players: [4, 8],
                    owner: {
                        name: 'Jorge',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 4.43,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                },
                <Game>{
                    id: '2',
                    name: 'Krosmaster',
                    players: [3, 6],
                    owner: {
                        name: 'Erik',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 4.83,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                },
                <Game>{
                    id: '3',
                    name: 'Truco do Odinha',
                    players: [2, 4],
                    owner: {
                        name: 'Odair',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 4.93,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                },
                <Game>{
                    id: '4',
                    name: 'Banco imobiliário',
                    players: [2, 8],
                    owner: {
                        name: 'Caioba',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 3.27,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                }
            ]
        );
    }

    getMostAccessedGames(): Observable<Array<Game>> {
        return Observable.of(
            [
                <Game>{
                    id: '1',
                    name: 'Arcadia',
                    players: [4, 8],
                    owner: {
                        name: 'Jorge',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 4.43,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                },
                <Game>{
                    id: '2',
                    name: 'Krosmaster',
                    players: [3, 6],
                    owner: {
                        name: 'Erik',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 4.83,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                },
                <Game>{
                    id: '3',
                    name: 'Truco do Odinha',
                    players: [2, 4],
                    owner: {
                        name: 'Odair',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 4.93,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                },
                <Game>{
                    id: '4',
                    name: 'Banco imobiliário',
                    players: [2, 8],
                    owner: {
                        name: 'Caioba',
                        email: 'jorgeta@bololo.com',
                        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg'
                    },
                    rating: 3.03,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam tempor sem quis nisl rutrum, eget ullamcorper nunc tempor. Praesent aliquet.`,
                    thumbnail: 'http://lorempixel.com/800/450/nature/'
                }
            ]
        );
    }

    newGame(): Observable<InsertedGame> {
        return Observable.of(
            <InsertedGame>{ id: '999' }
        );
    }
}
