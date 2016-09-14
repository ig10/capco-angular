import {User} from './user';
import {IStorage} from './services/storage';

export interface IForm {
    clear(): void;
    save(): void;
}

class FormController implements IForm {
    public static $inject = ['$state', 'storage'];

    constructor(
        private $state: ng.ui.IStateService,
        private storage: IStorage,
        private user: User = new User,
        private genders: string[]
    ) {
        this.genders = ['Male', 'Female'];
     }

    clear() {
        this.user = new User;
    }

    save() {
        this.storage.put(this.user);
        this.$state.transitionTo('user');
    }
}

export const form: angular.IComponentOptions = {
  template: require('./form.html'),
  controller: FormController
};
