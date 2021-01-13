import * as firebase from 'firebase';
import { STORAGE_FOLDERS } from '../configuration/constants';
import { StorageService } from './StorageService';

export interface IUsersService {
    updateUserAvatar: (uuid: string, blob: Blob) => Promise<void>
}

export class UsersService implements IUsersService {

    private static instance: IUsersService

    public static getInstance = (): IUsersService => {
        if (!UsersService.instance) { UsersService.instance = new UsersService() }
        return UsersService.instance;
    }

    public updateUserAvatar = async (uid: string, blob: Blob): Promise<void> => {
        const imgPath = `${STORAGE_FOLDERS.AVATARS}${uid}`;
        const ref = await StorageService.getInstance().updateFile(imgPath, blob);
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
            await currentUser.updateProfile({
                photoURL: await ref.getDownloadURL()
            });
        }
    }
}
