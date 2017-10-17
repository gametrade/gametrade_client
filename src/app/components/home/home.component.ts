import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gametrade-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public hasInfo: boolean;
    
    constructor() { }

    ngOnInit() {
        let localHasInfo = JSON.parse(localStorage.getItem('hasInfo'));
        this.hasInfo = (localHasInfo !== undefined && localHasInfo !== null) ? localHasInfo : true;
    }

    closeInfo() {
        this.hasInfo = false;
        localStorage.setItem('hasInfo', JSON.stringify(false));
    }
}