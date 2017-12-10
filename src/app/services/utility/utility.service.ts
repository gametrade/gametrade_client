import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { GametradeFile } from '../../models/gametrade-file';

@Injectable()
export class UtilityService {

    observableBatch: any = [];

    constructor() { }

    /**
     * Função responsável pela leitura de arquivos
     * @param files Lista de arquivos para leitura; É feito o parse para string binária
     * @param method Método a ser usado para leitura
     * 0: Base64
     * 1: String binária
     * 2: Array Buffer
     */
    readFiles(files: FileList, method: number = 0): any {
        this.observableBatch = [];

        Array.from(files).forEach((file: File) => {
            this.setUpFile(file, method);
        });

        return Observable.forkJoin(this.observableBatch);
    }

    /**
     * Função que prepara o arquivo, fazendo a leitura e criando o objeto GametradeFile
     * @param file: Arquivo a ser lido e retornado pelo subscribe
     */
    setUpFile(file: File, method: number): void {
        const reader = new FileReader();

        const observable: Observable<GametradeFile> = Observable.create((observer: any) => {
            reader.onload = (e: any) => {
                observer.next(new GametradeFile(file.name, e.target.result));
                observer.complete();
            };
        });

        this.observableBatch.push(observable);

        switch (method) {
            case 0:
                reader.readAsDataURL(file);
                break;
            case 1:
                reader.readAsBinaryString(file);
                break;
            case 2:
                reader.readAsArrayBuffer(file);
                break;
        }
    }
}
