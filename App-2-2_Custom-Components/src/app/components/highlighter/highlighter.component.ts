import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ViewEncapsulation, OnChanges, ElementRef, Renderer2, Input } from '@angular/core';

declare var hljs;

// import hljs from 'highlight.js';
// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';

@Component({
    selector: 'app-highlighter',
    templateUrl: './highlighter.component.html',
    styleUrls: [ './highlighter.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class HighlighterComponent implements OnInit, OnChanges, AfterViewInit {
    privateLang = '';
    privateIsEnabled = false;

    @ViewChild('contentWrapper', { static: false} ) content: ElementRef;

    PREFIX = 'HighlighterComponent';
    log(func, line = '') {
        console.log(this.PREFIX + '::' + func + '| ' + line);
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.log('constructor');
    }

    ngOnInit() {
        this.log('ngOnInit');

        // hljs.registerLanguage('javascript', javascript);
    }

    ngAfterViewInit() {
        const funcName = 'ngAfterViewInit';

        this.log(funcName);

        hljs.configure({useBR: true});

        let htmlElement;
        let formattedSource = '';

        htmlElement = this.elementRef.nativeElement; // .innerHTML;
        this.log(funcName, 'htmlElement=' + htmlElement);
        console.log(htmlElement);

        try {
            formattedSource = hljs.highlightBlock(htmlElement);
        } catch (error) {
            console.log(funcName, error);
        }

        this.log(funcName,  'formattedSource=' + formattedSource);
        // htmlElement.innerHTML = formattedSource;
    }

    highlight() {
        this.log('highlight');

        hljs.configure({ useBR: true });

        document.querySelectorAll('div.code').forEach(block => {
            console.log('block: ' + JSON.stringify(block));
            hljs.highlightBlock(block);
        });
    }

    @Input() set lang(val: string) {
        this.log('@Input: set src to ' + val);

        this.privateLang = val !== undefined && val !== null ? val : '';
    }

    @Input() set enabled(val: boolean) {
        this.log('@Input: set enabled to ' + val);

        this.privateIsEnabled = val;
    }

    ngOnChanges() {
        this.log('ngOnChanges');

        // this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '0px 0px ' + ratioHeight + ' 0px');
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

                this.renderer.addClass(
                    this.elementRef.nativeElement,
                    'img-loaded'
                );
            }, 500);
        } else {
            this.log('_loaded: removeClass img-loaded');

            this.renderer.removeClass(
                this.elementRef.nativeElement,
                'img-loaded'
            );
        }
    }
}
