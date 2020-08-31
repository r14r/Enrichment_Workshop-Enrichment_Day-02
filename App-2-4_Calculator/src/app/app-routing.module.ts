import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
	{ path: '', redirectTo: 'calc-basic', pathMatch: 'full' },
	{ path: 'calc-basic', loadChildren: './pages/calculator-basic/module#CalculatorPageModule' },
	{ path: 'calc-postfix', loadChildren: './pages/calculator-postfix/module#CalculatorPostfixPageModule' },
	{ path: 'calc-scientific', loadChildren: './pages/calculator-scientific/module#CalculatorScientificPageModule' },
	{ path: 'calc-graph', loadChildren: './pages/calculator-graph/module#CalculatorGraphPageModule' },
	{ path: 'demo-graphs', loadChildren: './pages/demo-graphs/module#DemoGraphsPageModule' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
