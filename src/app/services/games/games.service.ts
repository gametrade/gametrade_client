//#region Imports
// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Services
import { Angular2TokenService } from 'angular2-token';

// Models
import { Game, InsertedGame } from '../../models/game';

//#endregion

const games: Game[] = [
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
        thumbnail: 'http://lorempixel.com/800/450/transport/'
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
        thumbnail: 'http://lorempixel.com/800/450/nightlife/'
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
        thumbnail: 'http://lorempixel.com/800/450/people/'
    }
];

@Injectable()
export class GameService {

    constructor(private tokenHttp: Angular2TokenService) { }

    getMyGames(): Observable<Array<Game>> {
        return Observable.of(games);
    }

    getGames(name: string): Observable<Game[]> {
        return Observable.of(games).map(
            (gameList: Game[]) =>
                gameList.filter((game: Game) =>
                    game.name.includes(name))
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

    getGame(id: string): Observable<Game> {
        return Observable.of(games.find((game: Game) => game.id === id));
    }

    newGame(): Observable<InsertedGame> {
        return Observable.of(
            <InsertedGame>{ id: '999' }
        );
    }
}
