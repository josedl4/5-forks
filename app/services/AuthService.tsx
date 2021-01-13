import * as firebase from 'firebase';

export interface IAuthService {
    registerUser: (email: string, password: string) => Promise<firebase.auth.UserCredential>
    login: (email: string, password: string) => Promise<firebase.auth.UserCredential>
    logout: () => Promise<void>
    currentUser: () => firebase.User | null
}

export class AuthService implements IAuthService {

    private static instance: IAuthService

    public static getInstance = (): IAuthService => {
        if (!AuthService.instance) { AuthService.instance = new AuthService() }
        return AuthService.instance;
    }

    public registerUser = (email: string, password: string): Promise<firebase.auth.UserCredential> =>
        firebase.auth().createUserWithEmailAndPassword(email, password);

    public login = (email: string, password: string): Promise<firebase.auth.UserCredential> =>
        firebase.auth().signInWithEmailAndPassword(email, password);
    public logout = (): Promise<void> => firebase.auth().signOut();
    public currentUser = (): firebase.User | null => firebase.auth().currentUser;
}
