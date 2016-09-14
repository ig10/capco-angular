/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import 'angular-ui-router';
import 'angular-material-icons';
import 'angular-material';
import 'angular-messages';

import 'angular-material/angular-material.css';
import './index.scss';

import {user} from './app/user';
import {form} from './app/form';
import {Storage} from './app/services/storage';

import routesConfig from './routes';
import materialConfig from './material';

angular
  .module('capcoApp', ['ui.router', 'ngMaterial', 'ngMessages', 'ngMdIcons'])
  .config(routesConfig)
  .config(materialConfig)
  .component('customForm', form)
  .component('showUser', user)
  .service('storage', Storage);
