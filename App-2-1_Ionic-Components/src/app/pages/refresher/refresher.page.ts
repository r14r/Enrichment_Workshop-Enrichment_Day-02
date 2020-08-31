import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-refresher',
	templateUrl: './refresher.page.html',
	styleUrls: ['./refresher.page.scss']
})
export class RefresherPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
