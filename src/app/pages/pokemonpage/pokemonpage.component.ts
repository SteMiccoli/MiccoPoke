import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    computed,
    effect,
    inject,
    signal,
} from "@angular/core";
import { PokecardComponent } from "../../components/pokecard/pokecard.component";
import { AppComponent } from "../../app.component";

@Component({
    selector: "app-pokemonpage",
    standalone: true,
    templateUrl: "./pokemonpage.component.html",
    styleUrl: "./pokemonpage.component.css",
    imports: [PokecardComponent],
})
export class PokemonpageComponent implements OnChanges {
    /**
     * This name is taken from the URL parameter pokemon_name
     */
    @Input() pokemon_name = "";
    context = inject(AppComponent);

    ngOnChanges() {
        this.context.isContentLoaded.set(false);
        this.context.selectedPokemon.set(this.pokemon_name);
    }
}
