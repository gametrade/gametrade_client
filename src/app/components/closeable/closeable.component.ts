import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gametrade-closeable',
    templateUrl: './closeable.component.html',
    styleUrls: ['./closeable.component.scss']
})
export class CloseableComponent implements OnInit {
    @Output() onClose = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {
    }

    close() {
        this.onClose.emit(true);
    }
}
