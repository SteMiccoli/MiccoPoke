import { Routes } from '@angular/router';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PokemonpageComponent } from './pages/pokemonpage/pokemonpage.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Homepage',
        component: HomepageComponent,
    },
    {
        path: ':pokemon_name',
        title: 'PokemonPage',
        component: PokemonpageComponent,
    },
    {
        path: '**',
        title: 'NotFoundPage',
        component: NotfoundpageComponent,
    },
];
