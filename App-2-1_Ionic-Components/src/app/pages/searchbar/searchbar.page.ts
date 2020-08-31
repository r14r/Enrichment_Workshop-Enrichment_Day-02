import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-searchbar',
	templateUrl: './searchbar.page.html',
	styleUrls: ['./searchbar.page.scss']
})
export class SearchbarPage implements OnInit {
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
