class OfertasCtrl {
  constructor(Ofertas, AppConstants, $scope, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this.offers= [];

    var vm = this;
    /*NgMap.getMap().then(function(map) {
      vm.map = map;
    });*/
    

    Ofertas
      .getAll()
      .then(
        (offer) => {
          vm.offers = offer;
          console.log(vm.offers);
        }
      );
    
      $scope.openDetails=function(_id){
        console.log(_id);
        $state.go('app.detailoferta', { id: _id });
    }

    

    /*vm.pageChanged = function() {
      update();
    };

    function update(){
      var begin = ((vm.currentPage - 1) * vm.itemsPerPage), end = begin + vm.itemsPerPage;
      vm.filteredEvents = vm.Events.slice(begin, end);
    }

    $scope.getMarkers = function() {
      vm.positions = [];
      var Events = getFilteredEvents(vm.Events,vm.filtro);
      if(Events.length > 0){
        var centerLat = 0;
        var centerLong = 0;
        for (var i = 0; i < Events.length; i++) {
          var latitude = Events[i]['latitud'];
          var longitude = Events[i]['longitud'];
          centerLat += parseFloat(latitude);
          centerLong += parseFloat(longitude);

          var id = Events[i]['_id'];
          var name = Events[i]['name'];
          var type = Events[i]['type'];
          var imagen = Events[i]['img'];
          var pos = {
            id: id,
            name: name,
            type: type,
            imagen: imagen,
            pos:
              [parseFloat(latitude),
              parseFloat(longitude)]
            }
          vm.positions.push(pos);
        }
        centerLat = parseFloat(centerLat) / Events.length;
        centerLong = parseFloat(centerLong) / Events.length;
        vm.lat  = centerLat;
        vm.lng = centerLong;
      }
    }

    function getFilteredEvents(Events,filtro) {
      //console.log($filter('filter')(Events,filtro));
      return $filter('filter')(Events,filtro);
    }

    $scope.ShowHideMap = function() {
      let btnShowMap = document.getElementById('btnShowMap');
      let eventsListDOM = document.getElementById('eventsListDiv');
      if(vm.showMap == true){
        vm.showMap = false;
        btnShowMap.innerHTML = "Mostrar resultados en el mapa";
        btnShowMap.className = "btn btn-success";
        eventsListDOM.style.width = "100%";
        footer.style.width = "100%";
      }else if (vm.showMap == false) {
        vm.showMap = true;
        btnShowMap.innerHTML = "Ocultar mapa";
        btnShowMap.className = "btn btn-danger";
        eventsListDOM.style.width = "60%";
        footer.style.width = "60%";
      }
    }

    $scope.openDetails = function() {
      $state.go('app.detailevent', { id: vm.eventItem.id });
    };

    $scope.RefreshMarkers = function() {
      getMarkers();
    };

    $scope.showDetailsOnMap = function(e, eventItem) {
      //console.log(eventItem);
      vm.eventItem = eventItem;
      vm.map.showInfoWindow('myInfoWindow', eventItem.id);
    };

    $scope.showDetailsOnHover = function() {
      var latitude = this.event['latitud'];
      var longitude = this.event['longitud'];
      var id = this.event['_id'];
      var name = this.event['name'];
      var type = this.event['type'];
      var imagen = this.event['img'];
      var pos = {
        id: id,
        name: name,
        type: type,
        imagen: imagen,
        }
      vm.eventItem = pos;
      vm.map.showInfoWindow('myInfoWindow', id);
    }

    $scope.hideDetailsOnMap = function() {
      vm.map.hideInfoWindow('myInfoWindow');
    };*/
  }
}

export default OfertasCtrl;
