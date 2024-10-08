import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'cadastro', component: CadastroComponent}
];
