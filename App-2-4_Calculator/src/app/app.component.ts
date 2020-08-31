import { Component } from '@angular/core'

import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	public appPages = [
		{ title: 'Einfacher Rechner', url: '/calc-basic', icon: 'create' },
		{ title: 'Postfix', url: '/calc-postfix', icon: 'grid' },
		{ title: 'Wissenschaftlich', url: '/calc-scientific', icon: 'grid' },
		{ title: 'Funktionen', url: '/calc-graph', icon: 'graph' },
		{ title: 'Graph Demos', url: '/demo-graphs', icon: 'graph' }
	]

	constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
		this.initializeApp()
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault()
			this.splashScreen.hide()
		})
	}
}
