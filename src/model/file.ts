import { FileType } from "./file.type.enum";
import { PathItem } from "./path.item.interface";

export class File implements PathItem {

    constructor(public name: string, public path: string, public fileType: FileType) { }

}