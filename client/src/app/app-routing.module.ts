import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from "./core/not-found/not-found.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'test-error', component: TestErrorComponent},
    {path: 'server-error', component: ServerErrorComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'store', loadChildren: () => import('./store/store.module').then(mod => mod.StoreModule)},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
