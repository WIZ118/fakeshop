import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Home', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

    
})
export class AppRoutingModule { }