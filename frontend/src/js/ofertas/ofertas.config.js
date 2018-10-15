function OfertasConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.ofertas', {
    url: '/ofertas',
    controller: 'OfertasCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'ofertas/ofertas.html',
    title: 'Ofertas'
  })

  .state('app.detailoferta', {
    url: '/offer/:id',
    controller: 'DetailOfertaCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'ofertas/detailoferta.html',
    title: 'Detail Offer',
    resolve: {
      oferta: function($stateParams) {
        return $stateParams.id
      }
    }
  });
  

};

export default OfertasConfig;
