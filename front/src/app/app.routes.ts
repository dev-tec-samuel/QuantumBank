import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EnviarPixComponent } from './enviar-pix/enviar-pix.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OpcaoPixComponent } from './opcao-pix/opcao-pix.component';
import { ProvaPooComponent } from './prova-poo/prova-poo.component';
import { ReceberPixComponent } from './receber-pix/receber-pix.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'prova-poo', component: ProvaPooComponent},
  { path: 'enviar-pix', component: EnviarPixComponent},
  { path: 'opcao-pix', component: OpcaoPixComponent},
  { path: 'receber-pix', component: ReceberPixComponent},
];
