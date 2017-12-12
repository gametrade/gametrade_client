//#region Imports

// Core
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
import { UtilityService } from '../../../services/utility/utility.service';
import { GametradeFile } from '../../../models/gametrade-file';
import { Observable } from 'rxjs/Observable';

//#endregion

@Component({
    selector: 'gametrade-new-game',
    templateUrl: './new-game.component.html',
    styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

    new_game_form: FormGroup;
    game_id: number;

    photo_payload: PhotoPayload = new PhotoPayload();
    game_photos: GametradeFile[] = new Array<GametradeFile>();

    themes: Theme[] = [];
    game_kinds: GameKind[] = [];

    constructor(
        private fb: FormBuilder,
        private gameService: GameService,
        private catService: ThemeService,
        private gkService: GameKindService,
        private utilityService: UtilityService,
        private router: Router) {
        this.new_game_form = this.fb.group(new GamePayload);
    }

    ngOnInit() {
        Observable.forkJoin(
            this.catService.getTheme(),
            this.gkService.getKind()
        ).subscribe(([themes, kinds]) => {
            this.themes = themes;
            this.game_kinds = kinds;
        });
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

    onFileSelect(event: FileList) {
        this.utilityService.readFiles(event).subscribe(
            (files: GametradeFile[]) => {
                this.game_photos = files;

                files.forEach(
                    (file: GametradeFile) => {
                        this.photo_payload.photos_attributes.push({ photo: file.data });
                    }
                );
            }
        );
    }

    removePhoto(photo: GametradeFile) {
        this.game_photos.splice(this.game_photos.findIndex((curr: GametradeFile) => {
            return Object.is(curr, photo);
        }), 1);
    }

    savePhotos() {
        if (this.photo_payload.photos_attributes.length > 0) {
            this.gameService.includePhoto(this.photo_payload, this.game_id).subscribe(
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
