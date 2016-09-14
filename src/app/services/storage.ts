import {User} from '../user';

export interface IStorage {
    get(): User;
    put(user: User);
    clean(): void;
}

export class Storage implements IStorage {
    private STORAGE_ID: string = 'capco-angular-storage';

    get(): User {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '{}');
    }

    put(user: User) {
        localStorage.setItem(this.STORAGE_ID, JSON.stringify(user));
    }

    clean() {
        localStorage.setItem(this.STORAGE_ID, '{}');
    }
}
