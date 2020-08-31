import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            { path: 'd3-bar', children: [{ path: '', loadChildren: '../d3-bar/module#D3BarPageModule' }] },
            { path: 'd3-pie', children: [{ path: '', loadChildren: '../d3-pie/module#D3PiePageModule' }] },
            { path: 'd3-001', children: [{ path: '', loadChildren: '../d3-001/module#D3001PageModule' }] },
            { path: 'd3-002', children: [{ path: '', loadChildren: '../d3-002/module#D3002PageModule' }] },
            { path: 'd3-003', children: [{ path: '', loadChildren: '../d3-003/module#D3003PageModule' }] },
            { path: 'home', children: [{ path: '', loadChildren: '../home/module#HomePageModule' }] },
            { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
