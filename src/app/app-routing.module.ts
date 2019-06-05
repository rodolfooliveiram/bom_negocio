import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './guards/autenticacao.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'criar-anuncio', loadChildren: './criar-anuncio/criar-anuncio.module#CriarAnuncioPageModule' },
  { path: 'cadastrar-usuario', loadChildren: './cadastrar-usuario/cadastrar-usuario.module#CadastrarUsuarioPageModule' },
  { path: 'anuncio-detalhes/:id', loadChildren: './anuncio-detalhes/anuncio-detalhes.module#AnuncioDetalhesPageModule' },
  { path: 'meus-anuncios', loadChildren: './meus-anuncios/meus-anuncios.module#MeusAnunciosPageModule' },
  { path: 'editar-anuncio/:id', loadChildren: './editar-anuncio/editar-anuncio.module#EditarAnuncioPageModule' }
];

// canActivate:[AutenticacaoGuard]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
