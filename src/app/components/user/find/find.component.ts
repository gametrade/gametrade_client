import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'gametrade-find',
    templateUrl: './find.component.html',
    styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

    user: User;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                this.userService.getProfile(+params['id']).subscribe(
                    (result: any) => {
                        if (result.photo) {
                            result.photo = result.photo.concat(`?${Math.random().toString()}`);
                        }
                        this.user = result;
                    }
                );
            });
    }

}
