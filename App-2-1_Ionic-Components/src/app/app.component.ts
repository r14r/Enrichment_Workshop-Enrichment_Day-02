import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: 'list' },
		{ title: 'alert', url: '/alert', icon: 'alert' },
		{ title: 'action-sheet', url: '/action-sheet', icon: 'add' },
		{ title: 'alert', url: '/alert', icon: 'alert' },
		{ title: 'avatar', url: '/avatar', icon: 'add' },
		{ title: 'back-button', url: '/back-button', icon: 'add' },
		{ title: 'backdrop', url: '/backdrop', icon: 'add' },
		{ title: 'badge', url: '/badge', icon: 'add' },
		{ title: 'button', url: '/button', icon: 'add' },
		{ title: 'card', url: '/card', icon: 'card' },
		{ title: 'checkbox', url: '/checkbox', icon: 'checkbox' },
		{ title: 'chip', url: '/chip', icon: 'add' },
		{ title: 'content', url: '/content', icon: 'add' },
		{ title: 'datetime', url: '/datetime', icon: 'add' },
		{ title: 'fab', url: '/fab', icon: 'add' },
		{ title: 'grid', url: '/grid', icon: 'grid' },
		{ title: 'icon', url: '/icon', icon: 'add' },
		{ title: 'infinite-scroll', url: '/infinite-scroll', icon: 'add' },
		{ title: 'input', url: '/input', icon: 'add' },
		{ title: 'item', url: '/item', icon: 'add' },
		{ title: 'list', url: '/list', icon: 'list' },
		{ title: 'loading', url: '/loading', icon: 'add' },
		{ title: 'menu', url: '/menu', icon: 'menu' },
		{ title: 'modal', url: '/modal', icon: 'add' },
		{ title: 'nav', url: '/nav', icon: 'add' },
		{ title: 'note', url: '/note', icon: 'add' },
		{ title: 'picker', url: '/picker', icon: 'add' },
		{ title: 'popover', url: '/popover', icon: 'add' },
		{ title: 'progress-bar', url: '/progress-bar', icon: 'add' },
		{ title: 'radio', url: '/radio', icon: 'radio' },
		{ title: 'range', url: '/range', icon: 'add' },
		{ title: 'refresher', url: '/refresher', icon: 'add' },
		{ title: 'reorder', url: '/reorder', icon: 'reorder' },
		{ title: 'router-link', url: '/router-link', icon: 'add' },
		{ title: 'searchbar', url: '/searchbar', icon: 'search' },
		{ title: 'segment', url: '/segment', icon: 'add' },
		{ title: 'select', url: '/select', icon: 'add' },
		{ title: 'skeleton-text', url: '/skeleton-text', icon: 'add' },
		{ title: 'slides', url: '/slides', icon: 'add' },
		{ title: 'spinner', url: '/spinner', icon: 'add' },
		{ title: 'tabs', url: '/tabs', icon: 'add' },
		{ title: 'text', url: '/text', icon: 'text' },
		{ title: 'thumbnail', url: '/thumbnail', icon: 'add' },
		{ title: 'toast', url: '/toast', icon: 'add' },
		{ title: 'toggle', url: '/toggle', icon: 'add' },
		{ title: 'toolbar', url: '/toolbar', icon: 'add' }
	];

	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
