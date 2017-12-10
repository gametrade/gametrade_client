//#region Imports

// Core
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// Models
import { GamePayload, PhotoPayload } from '../../../models/game';
import { Theme } from '../../../models/theme';
import { GameKind } from '../../../models/game-kind';

// Services
import { ThemeService } from '../../../services/theme/theme.service';
import { GameKindService } from '../../../services/game-kind/game-kind.service';
import { GameService } from '../../../services/games/games.service';
import { Router } from '@angular/router';

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

    categories: Theme[] = [];
    game_kinds: GameKind[] = [];

    constructor(
        private fb: FormBuilder,
        private gameService: GameService,
        private catService: ThemeService,
        private gkService: GameKindService,
        private router: Router) {
        this.new_game_form = this.fb.group(new GamePayload);
    }

    ngOnInit() {
        this.catService.getTheme().subscribe(
            (result: Theme[]) => this.categories = result
        );

        this.gkService.getKind().subscribe(
            (result: GameKind[]) => this.game_kinds = result
        );
    }

    saveGame() {
        if (this.new_game_form.valid && this.new_game_form.dirty) {
            const values = this.new_game_form.value;

            this.gameService.newGame(values).subscribe(
                (result: any) => {
                    this.game_id = result.game.id;
                }
            );
        }
    }

    savePhotos() {
        if (this.game_photos.photos_attributes.length > 0) {
            this.gameService.includePhoto(this.game_photos, this.game_id).subscribe(
                (result: any) => {
                    console.log();
                }
            );
        }
    }

    goHome() {
        this.router.navigate(['/home']);
    }
}
