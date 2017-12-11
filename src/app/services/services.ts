//#region Services
import { GameService } from './games/games.service';
import { BaseService } from './base-service/base.service';
import { UserService } from './user/user.service';
import { ThemeService } from './theme/theme.service';
import { GameKindService } from './game-kind/game-kind.service';
import { UtilityService } from './utility/utility.service';
import { CurrentUserResolverService } from './current-user-resolver/current-user-resolver.service';

//#endregion

export const SERVICES = [
    GameService,
    BaseService,
    UserService,
    ThemeService,
    GameKindService,
    UtilityService,
    CurrentUserResolverService
];
