import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import ContactService from './contact.service';
servicesModule.service('Contact', ContactService);

import ToasterService from './toaster.service';
servicesModule.service('Toaster', ToasterService);


export default servicesModule;
