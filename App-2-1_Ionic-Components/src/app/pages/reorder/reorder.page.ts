import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-reorder',
	templateUrl: './reorder.page.html',
	styleUrls: ['./reorder.page.scss']
})
export class ReorderPage implements OnInit {
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
