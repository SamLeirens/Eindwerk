import { NgModule } from '@angular/core';
import {AddBoardStoryComponent} from "./add-board-story/add-board-story.component";
import {MatDialogModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderModule} from "../../header/header.module";

@NgModule({
  imports: [
  BrowserModule,
  HeaderModule,
  FormsModule,
  MatDialogModule
],
  declarations: [
    AddBoardStoryComponent
  ]
})
export class BoardModule { }
