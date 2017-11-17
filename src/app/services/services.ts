import { GameService } from './games/games.service';
import { BaseService } from './base-service/base.service';
import { UserService } from './user/user.service';

export let SERVICES = [
    GameService,
    BaseService,
    UserService
];
