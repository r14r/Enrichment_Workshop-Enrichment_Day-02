import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-back-button',
	templateUrl: './back-button.page.html',
	styleUrls: ['./back-button.page.scss']
})
export class BackButtonPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
