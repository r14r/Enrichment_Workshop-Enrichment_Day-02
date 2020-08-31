import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-range',
	templateUrl: './range.page.html',
	styleUrls: ['./range.page.scss']
})
export class RangePage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
