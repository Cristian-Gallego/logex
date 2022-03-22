import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: HomePageComponent },
  { path: 'users', component: UsersPageComponent, canActivate: [AuthGuard] },
  {
    path: 'users/:id',
    component: UserInfoPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
