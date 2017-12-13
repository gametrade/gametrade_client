import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from '../../../services/base-service/base.service';

@Component({
    selector: 'gametrade-loading-overlay',
    templateUrl: './loading-overlay.component.html',
    styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {

    @Input() mode = 'spinner';

    constructor(
        public baseService: BaseService
    ) { }

    ngOnInit() {
    }

}
