import { User } from './user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Payload used to post a NEW game
export class GamePayload {
    name: FormControl = new FormControl(undefined, Validators.required);
    description: FormControl = new FormControl(undefined, Validators.required);
    players: FormControl = new FormControl(undefined);
    launch_date: FormControl = new FormControl(undefined);
    game_kind_id: FormControl = new FormControl(undefined, Validators.required);
    theme_id: FormControl = new FormControl(undefined, Validators.required);
    user_id: number = undefined;
    price: number = undefined;
}

class Photo {
    photo: string = undefined;
}

export class PhotoPayload {
    photos_attributes: Array<Photo> = new Array<Photo>();
}

// Model object used to display game information
export class Game {
    id: number;
    name: string;
    description: string;
    launch_date: string;
    lifetime: string;
    players: number;
    user: User;
    game_kind: {
        id: number,
        name: string,
        created_at: string,
        updated_at: string
    };
    theme: {
        id: number,
        name: string,
        created_at: string,
        updated_at: string
    };
    price: number;
    created_at: string;
    updated_at: string;
    photos: any[];
    rating: any;
}
