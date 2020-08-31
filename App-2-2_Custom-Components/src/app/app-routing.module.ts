import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'list',
        loadChildren: () =>
            import('./pages/list/list.module').then(m => m.ListPageModule)
    },
    {
        path: 'learning-javascript',
        loadChildren: () =>
            import('./pages/learning-javascript/learning-javascript.module').then(
                m => m.LearningJavascriptPageModule
            )
    },
    {
        path: 'learning-html',
        loadChildren: () =>
            import('./pages/learning-html/learning-html.module').then(
                m => m.LearningHTMLPageModule
            )
    },
    {
        path: 'learning-css',
        loadChildren: () =>
            import('./pages/learning-css/learning-css.module').then(
                m => m.LearningCSSPageModule
            )
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
