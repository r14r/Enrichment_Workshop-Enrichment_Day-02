import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-item',
	templateUrl: './item.page.html',
	styleUrls: ['./item.page.scss']
})
export class ItemPage implements OnInit {
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
