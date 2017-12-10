import { NgModule } from '@angular/core';

import { MATERIAL_MODULES } from './shared-material';

@NgModule({
    imports: [MATERIAL_MODULES],
    exports: [MATERIAL_MODULES]
})
export class SharedMaterialModule { }
