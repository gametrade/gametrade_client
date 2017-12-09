//#region Imports

// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Services
import { BaseService } from '../base-service/base.service';

// Models
import { Game, InsertedGame, GamePayload, PhotoPayload } from '../../models/game';

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
        thumbnail: 'http://via.placeholder.com/800x450'
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
        thumbnail: 'http://via.placeholder.com/800x450'
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
        thumbnail: 'http://via.placeholder.com/800x450'
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
        thumbnail: 'http://via.placeholder.com/800x450'
    }
];

@Injectable()
export class GameService {

    constructor(private baseService: BaseService) { }

    getMyGames(): Observable<Game[]> {
        return this.baseService.GET<Game[]>(`games.json`);
    }

    getGames(name: string): Observable<Game[]> {
        return this.baseService.GET<Game[]>(`games.json?q[name_cont]=${name}`);
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
                    thumbnail: 'http://via.placeholder.com/800x450'
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
                    thumbnail: 'http://via.placeholder.com/800x450'
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
                    thumbnail: 'http://via.placeholder.com/800x450'
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
                    thumbnail: 'http://via.placeholder.com/800x450'
                }
            ]
        );
    }

    getMostRecentGames(): Observable<Array<Game>> {
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
                    thumbnail: 'http://via.placeholder.com/800x450'
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
                    thumbnail: 'http://via.placeholder.com/800x450'
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
                    thumbnail: 'http://via.placeholder.com/800x450'
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
                    thumbnail: 'http://via.placeholder.com/800x450'
                }
            ]
        );
    }

    getGame(id: string): Observable<Game> {
        return this.baseService.GET<Game>(`games/${id}.json`);
    }

    newGame(newGame: GamePayload): Observable<InsertedGame> {
        newGame.user_id = this.baseService.currentUser.id;
        return this.baseService.POST<InsertedGame>('games.json', newGame);
    }

    patchPhoto(photos: PhotoPayload, game_id: number) {
        return this.baseService.PATCH(`games/${game_id}.json`, photos);
    }
}
