import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'validacion',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'arboles', loadChildren: './arboles/arboles.module#ArbolesPageModule' },
  { path: 'mobiliario', loadChildren: './mobiliario/mobiliario.module#MobiliarioPageModule' },
  { path: 'mobiliario', loadChildren: './mobiliario/mobiliario.module#MobiliarioPageModule' },
  { path: 'listado', loadChildren: './listado/listado.module#ListadoPageModule' },
  { path: 'vista-mueble', loadChildren: './vista-mueble/vista-mueble.module#VistaMueblePageModule' },
  { path: 'agregarinventario', loadChildren: './agregarinventario/agregarinventario.module#AgregarinventarioPageModule' },
  { path: 'select-mob-arb', loadChildren: './select-mob-arb/select-mob-arb.module#SelectMobArbPageModule' },
  { path: 'validacion', loadChildren: './validacion/validacion.module#ValidacionPageModule' }
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
