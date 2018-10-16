class DetailOfertaCtrl {
  constructor(oferta, AppConstants, $scope, Ofertas, NgMap) {
    'ngInject';


    
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    var vm=this;
    NgMap.getMap().then(function(map) {
      vm.map = map;
    });

    Ofertas
      .getOffer(oferta)
      .then(
        (oferta) => {
          vm.oferta = oferta;
          console.log(vm.oferta);
        }
      );

  }
}

export default DetailOfertaCtrl;
