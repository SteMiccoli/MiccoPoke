import { NgOptimizedImage } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AppComponent } from "../../app.component";

@Component({
    selector: "app-homepage",
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: "./homepage.component.html",
    styleUrl: "./homepage.component.css",
})
export class HomepageComponent {
    context = inject(AppComponent);
}
