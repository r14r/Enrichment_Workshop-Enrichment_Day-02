import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HighlighterComponent } from './highlighter/highlighter.component';
import { PreloadImageComponent } from './preload-image/preload-image.component';

@NgModule({
    imports: [CommonModule, IonicModule.forRoot()],
    declarations: [HighlighterComponent, PreloadImageComponent],
    exports: [HighlighterComponent, PreloadImageComponent]
})
export class ComponentsModule {
    PREFIX = 'HighlighterComponent';
    log(func, line = '') {
        console.log(this.PREFIX + '::' + func + '| ' + line);
    }

    constructor() {
        this.log('constructor');
    }
}
