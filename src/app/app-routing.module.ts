import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/login/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'detailsColab/:id',
    loadChildren: () => import('./pages/details-colab/details-colab.module').then( m => m.DetailsColabPageModule)
  },
  {
    path: 'dashColab',
    loadChildren: () => import('./pages/dash-colab/dash-colab.module').then( m => m.DashColabPageModule)
  },
  {
    path: 'skillsColab',
    loadChildren: () => import('./pages/skills-colab/skills-colab.module').then( m => m.SkillsColabPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
