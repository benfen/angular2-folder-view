import { File, FileType, Folder, PathItem } from "../src/model/model";

export let generateMockData = function(): PathItem[] {
    let items: PathItem[] = [];
    let file1: File = new File("File 1", FileType.FILE);
    let file2: File = new File("File 2", FileType.FILE);
    let file3: File = new File("File 3", FileType.FILE);
    let folder1: Folder = new Folder("Folder With Elements", [file1, file2]);
    let folder2: Folder = new Folder("Empty Folder", []);

    items.push(folder1, folder2, file3);
    return items;
};