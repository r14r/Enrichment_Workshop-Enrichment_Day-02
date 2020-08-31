import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chip',
	templateUrl: './chip.page.html',
	styleUrls: ['./chip.page.scss']
})
export class ChipPage implements OnInit {
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
