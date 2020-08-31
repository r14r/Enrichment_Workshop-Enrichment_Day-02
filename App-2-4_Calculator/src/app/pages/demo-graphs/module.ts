import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { DemoGraphsPage } from './page'

const routes: Routes = [
	{
		path: '',
		component: DemoGraphsPage
	}
]

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [DemoGraphsPage]
})
export class DemoGraphsPageModule {}
