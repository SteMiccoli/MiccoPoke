import {
    Component,
    Injectable,
    OnInit,
    effect,
    inject,
    signal,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { IPokemon } from "../types";
import { PokemonService } from "./services/pokemon.service";
import { HeaderComponent } from "./components/header/header.component";

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        HeaderComponent,
    ],
})
@Injectable({
    providedIn: "root",
})
export class AppComponent {
    /**
     * The selected pokemon
     */
    selectedPokemon = signal("");

    /**
     * An object containing informations about a pokemon like name, hp, defense etc.
     */
    pokemonData = signal<IPokemon>({} as IPokemon);

    /**
     * Variable to tell if the call function to the api has finished
     */
    isContentLoaded = signal(false);

    private pokemonService = inject(PokemonService);

    constructor() {
        effect(() => {
            if (this.selectedPokemon()) {
                console.log(
                    `The selected pokemon is: ${this.selectedPokemon()}`
                );
                this.pokemonService
                    .getPokemon(this.selectedPokemon())
                    .then((res) => {
                        this.pokemonData.set(res.data);
                        console.log(this.pokemonData());
                    })
                    .catch((err) => {
                        this.pokemonData.set({} as IPokemon);
                        console.error(err);
                    })
                    .finally(() => {
                        this.isContentLoaded.set(true);
                    });
            }
        });
    }
}
