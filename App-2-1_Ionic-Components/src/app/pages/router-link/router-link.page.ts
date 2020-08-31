import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-router-link',
	templateUrl: './router-link.page.html',
	styleUrls: ['./router-link.page.scss']
})
export class RouterLinkPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
