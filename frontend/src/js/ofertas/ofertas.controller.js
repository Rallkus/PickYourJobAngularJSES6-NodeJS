class OfertasCtrl {
  constructor(Ofertas, AppConstants, $scope, $state, $filter) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this.filtro="";
    this.offers= [];
    this.offersFilter = [];

    var vm = this;
    

    Ofertas
      .getAll()
      .then(
        (offer) => {
          vm.offers = offer;
          vm.offersFilter=vm.offers;
          console.log(vm.offers);
        }
      );
    
      $scope.openDetails=function(_id){
        console.log(_id);
        $state.go('app.detailoferta', { id: _id });
    }
    $scope.changeFilter=function(){
      vm.offersFilter=getFilteredOffers(vm.offers, vm.filtro);
    }

    function getFilteredOffers(offers,filtro) {
      return $filter('filter')(offers,filtro);
    }
  }
}

export default OfertasCtrl;
