import { Component, Input, inject } from "@angular/core";
import { AppComponent } from "../../app.component";
import { NgClass, NgOptimizedImage } from "@angular/common";

@Component({
    selector: "app-pokecard",
    standalone: true,
    imports: [NgClass, NgOptimizedImage],
    templateUrl: "./pokecard.component.html",
    styleUrl: "./pokecard.component.css",
})
export class PokecardComponent {
    context = inject(AppComponent);
}
