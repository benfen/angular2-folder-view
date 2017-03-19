import { FileType } from "./file.type.enum";
import { PathItem } from "./path.item.interface";

export class Folder implements PathItem {

    fileType: FileType = FileType.FILE;
    path: string = "";

    constructor(public name: string, public items: PathItem[]) { }

}