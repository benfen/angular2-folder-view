import { FileType } from "./file.type.enum";

export interface PathItem {
    name: string;
    path: string;
    fileType: FileType;
}