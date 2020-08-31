import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.page.html',
	styleUrls: ['./card.page.scss']
})
export class CardPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
