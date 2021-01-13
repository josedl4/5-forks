import * as firebase from 'firebase';

export interface IStorageService {
    updateFile: (name: string, blob: Blob) => Promise<firebase.storage.Reference>
}

export class StorageService implements IStorageService {

    private static instance: IStorageService

    public static getInstance = (): IStorageService => {
        if (!StorageService.instance) { StorageService.instance = new StorageService() }
        return StorageService.instance;
    }

    public updateFile = async (path: string, blob: Blob): Promise<firebase.storage.Reference> => {
        const ref = firebase.storage().ref().child(path);
        await ref.put(blob);
        return firebase.storage().ref().child(path);
    }
}
