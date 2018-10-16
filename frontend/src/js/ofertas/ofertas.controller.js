class OfertasCtrl {
  constructor(Ofertas, AppConstants, $scope, $state, $filter) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this.filtro="";
    this.offers= [];
    this.offersFilter = [];
    this.currentPage = 1;
    this.itemsPerPage = 3;

    var vm = this;
    

    Ofertas
      .getAll()
      .then(
        (offer) => {
          vm.offers = offer;
          vm.offersFilter=vm.offers;
          console.log(vm.offers);
          update();
        }
      );
    
      $scope.openDetails=function(_id){
        $state.go('app.detailoferta', { id: _id });
    }
    $scope.changeFilter=function(){
      vm.offersFilter=getFilteredOffers(vm.offers, vm.filtro);
    }

    vm.pageChanged = function() {
      update();
    };

    function update(){
      var begin = ((vm.currentPage - 1) * vm.itemsPerPage), end = begin + vm.itemsPerPage;
      vm.offersFilter = vm.offers.slice(begin, end);
    }

    function getFilteredOffers(offers,filtro) {
      return $filter('filter')(offers,filtro);
    }
  }
}

export default OfertasCtrl;
