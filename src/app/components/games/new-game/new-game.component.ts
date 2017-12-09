//#region Imports

// Core
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// Models
import { GamePayload, InsertedGame, PhotoPayload } from '../../../models/game';
import { Category } from '../../../models/category';
import { GameKind } from '../../../models/game-kind';

// Services
import { CategoryService } from '../../../services/category/category.service';
import { GameKindService } from '../../../services/game-kind/game-kind.service';
import { GameService } from '../../../services/games/games.service';

//#endregion

@Component({
    selector: 'gametrade-new-game',
    templateUrl: './new-game.component.html',
    styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

    new_game_form: FormGroup;
    game_id: number;

    game_photos: PhotoPayload;

    categories: Category[] = [];
    game_kinds: GameKind[] = [];

    constructor(
        private fb: FormBuilder,
        private gameService: GameService,
        private catService: CategoryService,
        private gkService: GameKindService) {
        this.new_game_form = this.fb.group(new GamePayload);
    }

    ngOnInit() {
        this.catService.getCategory().subscribe(
            (result: Category[]) => this.categories = result
        );

        this.gkService.getKind().subscribe(
            (result: GameKind[]) => this.game_kinds = result
        );
    }

    saveGame() {
        if (this.new_game_form.valid && this.new_game_form.dirty) {
            const values = this.new_game_form.value;

            this.gameService.newGame(values).subscribe(
                (result: InsertedGame) => {
                    console.log(result);
                }
            );
        }
    }

    savePhotos() {
        if (this.game_photos.photos_attributes.length > 0) {
            this.gameService.patchPhoto(this.game_photos, this.game_id).subscribe(
                (result: any) => {
                    console.log();
                }
            );
        }
    }
}
