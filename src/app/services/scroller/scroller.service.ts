import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScrollerService {

    hasScrolled: Observable<boolean>;

    private scrollSubject: Subject<boolean>;

    constructor() {
        this.scrollSubject = new Subject<boolean>();

        this.hasScrolled = this.scrollSubject.asObservable();
    }

    onScroll() {
        this.scrollSubject.next(true);
        // this.scrollSubject.complete();
    }
}
