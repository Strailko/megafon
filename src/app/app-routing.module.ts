import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FormComponent } from './form/form.component';
import { LandingComponent } from './landing/landing.component';
import { MapComponent } from './map/map.component';
import { NewpostComponent } from './newpost/newpost.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'newsfeed', component: NewsComponent, pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent, pathMatch: 'full' },
  { path: 'map', component: MapComponent, pathMatch: 'full' },
  { path: 'search/:query', component: SearchComponent, pathMatch: 'full' },
  { path: 'post/create/:type', component: NewpostComponent, pathMatch: 'full' },
  { path: 'post/edit/:id', component: NewpostComponent, pathMatch: 'full' },
  { path: 'profile/create', component: FormComponent, pathMatch: 'full' },
  { path: 'profile/edit/:id', component: FormComponent, pathMatch: 'full' },
  { path: 'profile/view/:id', component: ProfileComponent, pathMatch: 'full' },
  { path: 'userprofile/:id', component: UserprofileComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
