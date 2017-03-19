import { FileType } from "./file.type.enum";
import { PathItem } from "./path.item.interface";

export class File implements PathItem {

    path: string = "";

    constructor(public name: string, public fileType: FileType) { }

}