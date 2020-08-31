import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-fab',
	templateUrl: './fab.page.html',
	styleUrls: ['./fab.page.scss']
})
export class FabPage implements OnInit {
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
