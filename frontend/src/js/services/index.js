import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import ContactService from './contact.service';
servicesModule.service('Contact', ContactService);

import ToasterService from './toaster.service';
servicesModule.service('Toaster', ToasterService);

import UserService from './user.service';
servicesModule.service('User', UserService);

import JwtService from './jwt.service'
servicesModule.service('JWT', JwtService);

import OfertasService from './ofertas.service'
servicesModule.service('Ofertas', OfertasService);

export default servicesModule;
