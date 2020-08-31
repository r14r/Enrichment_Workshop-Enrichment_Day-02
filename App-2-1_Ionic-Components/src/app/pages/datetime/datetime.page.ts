import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-datetime',
	templateUrl: './datetime.page.html',
	styleUrls: ['./datetime.page.scss']
})
export class DatetimePage implements OnInit {
	theDate = '2019-06-13T01:00:10.395-05:00';
	theDateCompleted: string = new Date().toISOString();

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

	handleChange(event) {
		console.log(event.detail.value);
	}
}
