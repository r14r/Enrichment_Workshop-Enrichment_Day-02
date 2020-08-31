import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-input',
	templateUrl: './input.page.html',
	styleUrls: ['./input.page.scss']
})
export class InputPage implements OnInit {
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
