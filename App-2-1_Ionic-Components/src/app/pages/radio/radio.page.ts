import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-radio',
	templateUrl: './radio.page.html',
	styleUrls: ['./radio.page.scss']
})
export class RadioPage implements OnInit {
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
