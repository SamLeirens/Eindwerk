import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderModule} from "../header/header.module";
import {FormsModule} from "@angular/forms";
import {GroepComponent} from "./groep.component";
import {GroepService} from "./groep.service";
import {MatDialogModule} from "@angular/material";
import {FileUploadModule} from "primeng/primeng";
import { BoardComponent } from './board/board.component';
import { AddBoardStoryComponent } from './board/add-board-story/add-board-story.component';
import {BoardModule} from "./board/board.module";


@NgModule({
    declarations: [
        GroepComponent,
        BoardComponent

    ],
    imports: [
        BrowserModule,
        HeaderModule,
        FormsModule,
        MatDialogModule,
        BoardModule

    ],

    exports:[
        GroepService
    ],
    providers: [GroepService],
    bootstrap: [GroepComponent]
})
export class GroepModule { }
