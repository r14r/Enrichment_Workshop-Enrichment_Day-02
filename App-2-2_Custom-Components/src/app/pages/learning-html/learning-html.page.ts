import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-learning-html',
    templateUrl: './learning-html.page.html',
    styleUrls: ['./learning-html.page.scss']
})
export class LearningHTMLPage implements OnInit {
    PREFIX = 'LearningHTMLPage';
    log(func, line = '') {
        console.log(this.PREFIX + '::' + func + '| ' + line);
    }

    constructor() {
        this.log('constructor');
    }

    ngOnInit() {
        this.log('ngOnInit');
    }
}
