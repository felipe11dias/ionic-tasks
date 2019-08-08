import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'adding-modal', loadChildren: './adding-modal/adding-modal.module#AddingModalPageModule' },
  { path: 'remove-modal', loadChildren: './remove-modal/remove-modal.module#RemoveModalPageModule' },
  { path: 'update-modal', loadChildren: './update-modal/update-modal.module#UpdateModalPageModule' },
  { path: 'show-modal', loadChildren: './show-modal/show-modal.module#ShowModalPageModule' },
  { path: 'list-tasks', loadChildren: './list-tasks/list-tasks.module#ListTasksPageModule' },
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
