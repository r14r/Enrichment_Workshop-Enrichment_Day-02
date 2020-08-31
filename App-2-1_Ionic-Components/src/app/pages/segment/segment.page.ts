import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-segment',
	templateUrl: './segment.page.html',
	styleUrls: ['./segment.page.scss']
})
export class SegmentPage implements OnInit {
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
