import { Component, OnInit } from '@angular/core';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { PopoverController } from '@ionic/angular';

@Component({
	selector: 'app-popover',
	templateUrl: './popover.page.html',
	styleUrls: ['./popover.page.scss']
})
export class PopoverPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor(private popoverController: PopoverController) {
		this.log('constructor');
	}

	ngOnInit() {
		this.log('ngOnInit');
	}

	async handleClick(event) {
		const popover = await this.popoverController.create({
			component: PopinfoComponent,
			// event: event,
			mode: 'ios',
			backdropDismiss: false
		});
		await popover.present();

		const { data } = await popover.onDidDismiss();
		console.log('padre', data);
	}
}
