import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-badge',
	templateUrl: './badge.page.html',
	styleUrls: ['./badge.page.scss']
})
export class BadgePage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
