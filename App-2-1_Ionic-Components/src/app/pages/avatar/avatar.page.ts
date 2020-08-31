import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.page.html',
	styleUrls: ['./avatar.page.scss']
})
export class AvatarPage implements OnInit {
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
