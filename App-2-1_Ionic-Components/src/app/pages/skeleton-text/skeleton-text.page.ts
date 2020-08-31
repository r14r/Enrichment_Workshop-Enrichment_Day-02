import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-skeleton-text',
	templateUrl: './skeleton-text.page.html',
	styleUrls: ['./skeleton-text.page.scss']
})
export class SkeletonTextPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
