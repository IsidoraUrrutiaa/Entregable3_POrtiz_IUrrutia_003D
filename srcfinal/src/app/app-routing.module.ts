import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: 'index',
    loadChildren: () =>
    import('./pages/index/index.module').then(m => m.IndexPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./pages/reset-password/reset-password.module').then(
        m => m.ResetPasswordPageModule
      )
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    // canActivate: [AuthGuard]
  },

  /*{ path: 'index', loadChildren: './pages/index/index.module#IndexPageModule' },*/
  {
    path: 'medidas',
    loadChildren: () =>
    import('./pages/medidas/medidas.module').then(m => m.MedidasPageModule),
    canActivate: [AuthGuard]
  },
  /*{ path: 'medidas', loadChildren: './pages/medidas/medidas.module#MedidasPageModule' },*/
  {
    path: 'news',
    loadChildren: () =>
    import('./pages/news/news.module').then(m => m.NewsPageModule),
    canActivate: [AuthGuard]
  },
  // { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
  {
    path: 'noticias',
    loadChildren: () =>
    import('./pages/noticias/noticias.module').then(m => m.NoticiasPageModule),
    canActivate: [AuthGuard]
  },
  // { path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasPageModule' },
  {
    path: 'comentarios',
    loadChildren: () =>
    import('./pages/comentarios/comentarios.module').then(m => m.ComentariosPageModule),
    canActivate: [AuthGuard]
  },
  // { path: 'comentarios', loadChildren: './pages/comentarios/comentarios.module#ComentariosPageModule' },
  {
    path: 'registro',
    loadChildren: () =>
    import('./pages/registro/registro.module').then(m => m.RegistroPageModule),
    canActivate: [AuthGuard]
  },
  // { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  {
    path: 'conocenos',
    loadChildren: () =>
    import('./pages/conocenos/conocenos.module').then(m => m.ConocenosPageModule),
    canActivate: [AuthGuard]
  },
  // { path: 'conocenos', loadChildren: './pages/conocenos/conocenos.module#ConocenosPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
