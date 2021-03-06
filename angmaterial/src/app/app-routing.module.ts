import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { TerceiraPaginaComponent } from './terceira-pagina/terceira-pagina.component';
import { MinhaDashboardComponent } from './minha-dashboard/minha-dashboard.component';

const routes: Routes = [
  { path: '', component: MinhaDashboardComponent },
  { path: 'primeira-pagina', component: PrimeiraPaginaComponent },
  { path: 'segunda-pagina', component: SegundaPaginaComponent },
  { path: 'terceira-pagina', component: TerceiraPaginaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
