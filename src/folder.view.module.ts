import { NgModule }           from "@angular/core";
import { CommonModule }       from "@angular/common";
import { FolderViewComponent } from "./folder.view.component";

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ FolderViewComponent ],
  exports:      [ FolderViewComponent ],
  providers:    [ ]
})
export class FolderViewModule { }