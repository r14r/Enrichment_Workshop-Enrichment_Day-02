import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-grid',
	templateUrl: './grid.page.html',
	styleUrls: ['./grid.page.scss']
})
export class GridPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
