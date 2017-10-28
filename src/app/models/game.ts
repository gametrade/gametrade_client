import { User } from './user';

// Payload used to post a NEW game
export class GamePayload {
    name: string = undefined;
    description: string = undefined;
    players: number = undefined;
    lifetime: string = undefined;
    user_id: number = undefined;
    game_kind_id: number = undefined;
    category_id: number = undefined;

    photos_attributes: Array<{
        photo: string
    }>;
}

// Model object used to display game information
export class Game {
    id: string = undefined;
    name: string = undefined;
    players: Array<number> = new Array<number>();
    owner: User = new User();
    rating: number = undefined;
    description: string = undefined;
    thumbnail: string = undefined;
}

export class InsertedGame {
    id: string = undefined;
}
