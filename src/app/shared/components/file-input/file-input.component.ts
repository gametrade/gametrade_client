import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'gametrade-file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {
    @Input() accept: string;
    @Input() multiple: boolean;
    @Input() showCount = false;
    @Output() onFileSelect: EventEmitter<File[]> = new EventEmitter();

    @ViewChild('inputFile') nativeInputFile: ElementRef;

    private _files: File[];

    get fileCount(): number { return this._files && this._files.length || 0; }

    onNativeInputFileSelect($event) {
        this._files = $event.srcElement.files;
        this.onFileSelect.emit(this._files);
    }

    selectFile() {
        this.nativeInputFile.nativeElement.click();
    }

}
