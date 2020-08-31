import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then(m => m.HomePageModule)
	},
	{
		path: 'list',
		loadChildren: () =>
			import('./list/list.module').then(m => m.ListPageModule)
	},
	{
		path: 'alert',
		loadChildren: () =>
			import('./pages/alert/alert.module').then(m => m.AlertPageModule)
	},
	{
		path: 'action-sheet',
		loadChildren: () =>
			import('./pages/action-sheet/action-sheet.module').then(
				m => m.ActionSheetPageModule
			)
	},
	{
		path: 'alert',
		loadChildren: () =>
			import('./pages/alert/alert.module').then(m => m.AlertPageModule)
	},
	{
		path: 'avatar',
		loadChildren: () =>
			import('./pages/avatar/avatar.module').then(m => m.AvatarPageModule)
	},
	{
		path: 'back-button',
		loadChildren: () =>
			import('./pages/back-button/back-button.module').then(
				m => m.BackButtonPageModule
			)
	},
	{
		path: 'backdrop',
		loadChildren: () =>
			import('./pages/backdrop/backdrop.module').then(
				m => m.BackdropPageModule
			)
	},
	{
		path: 'badge',
		loadChildren: () =>
			import('./pages/badge/badge.module').then(m => m.BadgePageModule)
	},
	{
		path: 'button',
		loadChildren: () =>
			import('./pages/button/button.module').then(m => m.ButtonPageModule)
	},
	{
		path: 'card',
		loadChildren: () =>
			import('./pages/card/card.module').then(m => m.CardPageModule)
	},
	{
		path: 'checkbox',
		loadChildren: () =>
			import('./pages/checkbox/checkbox.module').then(
				m => m.CheckboxPageModule
			)
	},
	{
		path: 'chip',
		loadChildren: () =>
			import('./pages/chip/chip.module').then(m => m.ChipPageModule)
	},
	{
		path: 'content',
		loadChildren: () =>
			import('./pages/content/content.module').then(
				m => m.ContentPageModule
			)
	},
	{
		path: 'datetime',
		loadChildren: () =>
			import('./pages/datetime/datetime.module').then(
				m => m.DatetimePageModule
			)
	},
	{
		path: 'fab',
		loadChildren: () =>
			import('./pages/fab/fab.module').then(m => m.FabPageModule)
	},
	{
		path: 'grid',
		loadChildren: () =>
			import('./pages/grid/grid.module').then(m => m.GridPageModule)
	},
	{
		path: 'icon',
		loadChildren: () =>
			import('./pages/icon/icon.module').then(m => m.IconPageModule)
	},
	{
		path: 'infinite-scroll',
		loadChildren: () =>
			import('./pages/infinite-scroll/infinite-scroll.module').then(
				m => m.InfiniteScrollPageModule
			)
	},
	{
		path: 'input',
		loadChildren: () =>
			import('./pages/input/input.module').then(m => m.InputPageModule)
	},
	{
		path: 'item',
		loadChildren: () =>
			import('./pages/item/item.module').then(m => m.ItemPageModule)
	},
	{
		path: 'list',
		loadChildren: () =>
			import('./pages/list/list.module').then(m => m.ListPageModule)
	},
	{
		path: 'loading',
		loadChildren: () =>
			import('./pages/loading/loading.module').then(
				m => m.LoadingPageModule
			)
	},
	{
		path: 'menu',
		loadChildren: () =>
			import('./pages/menu/menu.module').then(m => m.MenuPageModule)
	},
	{
		path: 'modal',
		loadChildren: () =>
			import('./pages/modal/modal.module').then(m => m.ModalPageModule)
	},
	{
		path: 'nav',
		loadChildren: () =>
			import('./pages/nav/nav.module').then(m => m.NavPageModule)
	},
	{
		path: 'note',
		loadChildren: () =>
			import('./pages/note/note.module').then(m => m.NotePageModule)
	},
	{
		path: 'picker',
		loadChildren: () =>
			import('./pages/picker/picker.module').then(m => m.PickerPageModule)
	},
	{
		path: 'popover',
		loadChildren: () =>
			import('./pages/popover/popover.module').then(
				m => m.PopoverPageModule
			)
	},
	{
		path: 'progress-bar',
		loadChildren: () =>
			import('./pages/progress-bar/progress-bar.module').then(
				m => m.ProgressBarPageModule
			)
	},
	{
		path: 'radio',
		loadChildren: () =>
			import('./pages/radio/radio.module').then(m => m.RadioPageModule)
	},
	{
		path: 'range',
		loadChildren: () =>
			import('./pages/range/range.module').then(m => m.RangePageModule)
	},
	{
		path: 'refresher',
		loadChildren: () =>
			import('./pages/refresher/refresher.module').then(
				m => m.RefresherPageModule
			)
	},
	{
		path: 'reorder',
		loadChildren: () =>
			import('./pages/reorder/reorder.module').then(
				m => m.ReorderPageModule
			)
	},
	{
		path: 'router-link',
		loadChildren: () =>
			import('./pages/router-link/router-link.module').then(
				m => m.RouterLinkPageModule
			)
	},
	{
		path: 'searchbar',
		loadChildren: () =>
			import('./pages/searchbar/searchbar.module').then(
				m => m.SearchbarPageModule
			)
	},
	{
		path: 'segment',
		loadChildren: () =>
			import('./pages/segment/segment.module').then(
				m => m.SegmentPageModule
			)
	},
	{
		path: 'select',
		loadChildren: () =>
			import('./pages/select/select.module').then(m => m.SelectPageModule)
	},
	{
		path: 'skeleton-text',
		loadChildren: () =>
			import('./pages/skeleton-text/skeleton-text.module').then(
				m => m.SkeletonTextPageModule
			)
	},
	{
		path: 'slides',
		loadChildren: () =>
			import('./pages/slides/slides.module').then(m => m.SlidesPageModule)
	},
	{
		path: 'spinner',
		loadChildren: () =>
			import('./pages/spinner/spinner.module').then(
				m => m.SpinnerPageModule
			)
	},
	{
		path: 'tabs',
		loadChildren: () =>
			import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: 'text',
		loadChildren: () =>
			import('./pages/text/text.module').then(m => m.TextPageModule)
	},
	{
		path: 'thumbnail',
		loadChildren: () =>
			import('./pages/thumbnail/thumbnail.module').then(
				m => m.ThumbnailPageModule
			)
	},
	{
		path: 'toast',
		loadChildren: () =>
			import('./pages/toast/toast.module').then(m => m.ToastPageModule)
	},
	{
		path: 'toggle',
		loadChildren: () =>
			import('./pages/toggle/toggle.module').then(m => m.TogglePageModule)
	},
	{
		path: 'toolbar',
		loadChildren: () =>
			import('./pages/toolbar/toolbar.module').then(
				m => m.ToolbarPageModule
			)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}
}
