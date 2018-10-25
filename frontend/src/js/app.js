import angular from 'angular';


// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-animate';
import toastr from 'angular-toastr';
import 'ngmap';
// Import our templates file (generated by Gulp)
import './config/app.templates';
// Import our app functionaity
import './layout';
import './components';
import './contact';
import './profile';
import './services';
import './auth';
import './ofertas';
import 'angular-messages';
import Toaster from './services/toaster.service';





// Create and bootstrap application
const requires = [
  'ui.router',
  'ui.bootstrap',
  'templates',
  'app.layout',
  'app.components',
  'app.ofertas',
  'app.contact',
  'ngMap',
  'app.services',
  'app.auth',
  'app.profile',
  'ngMessages',
  toastr
];

// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});