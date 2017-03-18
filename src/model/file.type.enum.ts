export const enum FileType {
    FILE,
    FOLDER_OPEN,
    FOLDER_CLOSED,
    FOLDER = FOLDER_OPEN | FOLDER_CLOSED
}