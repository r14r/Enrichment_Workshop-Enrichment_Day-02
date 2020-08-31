import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.page.html',
	styleUrls: ['./nav.page.scss']
})
export class NavPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
