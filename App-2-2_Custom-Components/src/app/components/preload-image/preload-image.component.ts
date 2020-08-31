import { Component, OnInit, ViewEncapsulation, OnChanges, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
    selector: 'app-preload-image',
    templateUrl: './preload-image.component.html',
    styleUrls: ['./preload-image.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PreloadImageComponent implements OnInit, OnChanges {
    thisSrc = '';
    thisRatio: { w: number; h: number };

    PREFIX = 'HighlighterComponent';
    log(func, line = '') {
        console.log(this.PREFIX + '::' + func + '| ' + line);
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {
        this.log('constructor');
    }

    ngOnInit() {
        // this.log('ngOnInit');
        // this.highlight();
    }

    @Input() set src(val: string) {
        this.log('@Input: set src to ' + val);

        this.thisSrc = val !== undefined && val !== null ? val : '';
    }

    @Input() set ratio(ratio: { w: number; h: number }) {
        this.log('@Input: set ratio to ' + ratio);

        this.thisRatio = ratio || { w: 1, h: 1 };
    }

    ngOnChanges() {
        this.log('ngOnChanges');

        const ratioHeight = (this.thisRatio.h / this.thisRatio.w) * 100 + '%';

        this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '0px 0px ' + ratioHeight + ' 0px');
        this._update();
    }

    _update() {
        this.log('_update');

        this._loaded(false);
    }

    _loaded(isLoaded: boolean) {
        this.log('_loaded: isLoaded=' + isLoaded);

        if (isLoaded) {
            setTimeout(() => {
                this.log('_loaded: addClass img-loaded');

                this.renderer.addClass(this.elementRef.nativeElement, 'img-loaded');
            }, 500);
        } else {
            this.log('_loaded: removeClass img-loaded');

            this.renderer.removeClass(this.elementRef.nativeElement, 'img-loaded');
        }
    }
}
