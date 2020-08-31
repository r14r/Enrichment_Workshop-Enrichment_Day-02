import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.page.html',
	styleUrls: ['./icon.page.scss']
})
export class IconPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
