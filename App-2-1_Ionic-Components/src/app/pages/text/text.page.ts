import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-text',
	templateUrl: './text.page.html',
	styleUrls: ['./text.page.scss']
})
export class TextPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
