import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'gametrade-custom-image',
    templateUrl: './custom-image.component.html',
    styleUrls: ['./custom-image.component.scss']
})
export class CustomImageComponent implements OnInit {
    @Input() src: string;
    @Input() alt: string;

    loaded = false;

    constructor() { }

    ngOnInit() {
    }

    imageLoaded() {
        this.loaded = true;
    }
}
