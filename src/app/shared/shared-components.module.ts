import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common/src/common_module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SHARED_COMPONENTS } from './components/shared-components';
import { MATERIAL_MODULES } from './material/shared-material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MATERIAL_MODULES
    ],
    exports: [SHARED_COMPONENTS, MATERIAL_MODULES],
    declarations: [SHARED_COMPONENTS]
})
export class SharedModule { }
