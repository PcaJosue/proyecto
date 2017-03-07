import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {ClientesComponent} from "./clientes/clientes.component";
import {AppComponent} from "./app.component"
import{ProductosComponent}from "./productos/productos.component";
export const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
 
 
  {path:'clientes', component:ClientesComponent},
  {path:'productos', component:ProductosComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);