import { User } from './user';
import { FormControl, Validators } from '@angular/forms';

// Payload used to post a NEW game
export class GamePayload {
    name: FormControl = new FormControl(undefined, Validators.required);
    description: FormControl = new FormControl(undefined, Validators.required);
    players: FormControl = new FormControl(undefined, Validators.required);
    lifetime: FormControl = new FormControl(undefined, Validators.required);
    game_kind_id: FormControl = new FormControl(undefined, Validators.required);
    category_id: FormControl = new FormControl(undefined, Validators.required);
    user_id: number = undefined;

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
