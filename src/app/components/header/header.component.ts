import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {
    searchInput = "";

    handleSubmit() {
        this.searchInput = "";
    }
}
