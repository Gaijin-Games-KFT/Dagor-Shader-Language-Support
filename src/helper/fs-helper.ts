import { Dirent } from 'fs';
import * as fsp from 'fs/promises';

export async function loadFile(file: string): Promise<string> {
    return await fsp.readFile(file, 'utf8');
}

export async function exists(path: string): Promise<boolean> {
    try {
        await fsp.access(path, fsp.constants.R_OK);
        return true;
    } catch {
        // folder or file doesn't exist
        return false;
    }
}

export async function getFolderContent(path: string): Promise<Dirent[]> {
    return await fsp.readdir(path, { withFileTypes: true });
}
