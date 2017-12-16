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
        if (this.src) {
            this.src = this.src.concat('?' + new Date().toString());
        }
    }

    imageLoaded() {
        this.loaded = true;
    }
}
