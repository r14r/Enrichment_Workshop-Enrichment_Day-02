import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-spinner',
	templateUrl: './spinner.page.html',
	styleUrls: ['./spinner.page.scss']
})
export class SpinnerPage implements OnInit {
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
