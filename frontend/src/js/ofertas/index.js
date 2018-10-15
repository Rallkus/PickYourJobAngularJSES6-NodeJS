import angular from 'angular';

// Create the module where our functionality can attach to
let ofertasModule = angular.module('app.ofertas', []);

// Include our UI-Router config settings
import OfertasConfig from './ofertas.config';
ofertasModule.config(OfertasConfig);


// Controllers
import OfertasCtrl from './ofertas.controller';
ofertasModule.controller('OfertasCtrl', OfertasCtrl);

import DetailOfertaCtrl from './detailoferta.controller';
ofertasModule.controller('DetailOfertaCtrl', DetailOfertaCtrl);

export default ofertasModule;
