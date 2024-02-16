import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EditdetailsComponent } from "./components/editdetails/editdetails.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        EditdetailsComponent
    ],
    exports: [
        EditdetailsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
