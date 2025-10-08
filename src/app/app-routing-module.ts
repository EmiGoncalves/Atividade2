import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Apolice } from './apolice/apolice';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { IMC } from './imc/imc';

const routes: Routes = [
  {path: '', redirectTo: 'calcular-media', pathMatch: 'full' },
  {path:'apolice', component:Apolice},
  {path:'conversor-temparatura', component:ConversorTemperatura},
  {path:'imc',component:IMC},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
