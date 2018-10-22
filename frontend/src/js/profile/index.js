import angular from 'angular';

// Create the module where our functionality can attach to
let profileModule = angular.module('app.profile', []);

// Controllers

import ProfileConfig from './profile.config';
profileModule.config(ProfileConfig);


import ProfileCtrl from './profile.controller';
profileModule.controller('ProfileCtrl', ProfileCtrl);


export default profileModule;
