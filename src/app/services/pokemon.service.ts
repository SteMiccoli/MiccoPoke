import { Injectable } from "@angular/core";
import axios from "axios";
import { API_URL } from "../../utils/utils";

@Injectable({
    providedIn: "root",
})
export class PokemonService {
    getPokemon(selectedPokemon: string) {
        return axios.get(API_URL + selectedPokemon);
    }
}
