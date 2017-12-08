//#region Imports

// Core
import { Component, OnInit } from '@angular/core';
import { GamePayload } from '../../../models/game';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category/category.service';
import { GameKind } from '../../../models/game-kind';
import { GameKindService } from '../../../services/game-kind/game-kind.service';

//#endregion

@Component({
    selector: 'gametrade-new-game',
    templateUrl: './new-game.component.html',
    styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

    newGameForm: FormGroup;
    categories: Category[] = [];
    game_kinds: GameKind[] = [];

    constructor(
        private fb: FormBuilder,
        private catService: CategoryService,
        private gkService: GameKindService) {
        this.newGameForm = this.fb.group(new GamePayload);
    }

    ngOnInit() {
        this.catService.getCategory().subscribe(
            (result: Category[]) => this.categories = result
        );

        this.gkService.getKind().subscribe(
            (result: GameKind[]) => this.game_kinds = result
        );
    }

}
