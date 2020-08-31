import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-toggle',
	templateUrl: './toggle.page.html',
	styleUrls: ['./toggle.page.scss']
})
export class TogglePage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() {
		this.log('ngOnInit');
	}
}
