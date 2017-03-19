import { Component, Input, OnInit } from "@angular/core";
import { PathItem } from "./model/model";

@Component({
    selector: "folder-view",
    styleUrls: [],
    templateUrl: "folder.view.component.html"
})
export class FolderViewComponent implements OnInit {

    @Input()
    public itemList: PathItem[] = [];

    constructor() { }

    ngOnInit() { }
}