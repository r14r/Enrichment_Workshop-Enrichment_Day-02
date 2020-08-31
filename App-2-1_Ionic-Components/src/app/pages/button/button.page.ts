import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.page.html',
	styleUrls: ['./button.page.scss']
})
export class ButtonPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {}

	ngOnInit() {}
}
