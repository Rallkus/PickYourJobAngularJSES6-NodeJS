class DetailOfertaCtrl {
  constructor(oferta, AppConstants, $scope, Ofertas) {
    'ngInject';


    
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    var vm=this;

    Ofertas
      .getOffer(oferta)
      .then(
        (oferta) => {
          vm.oferta = oferta;
          console.log(vm.oferta);
        }
      );
    
    /*if(this.event.stock == 0) {
      this.Vcash = false;
      this.Vexhausted = true;
    } else {
      if(this.event.price == 0) {
        this.Vcash = false;
        this.Vexhausted = false;
      } else {
        this.Vcash = true;
        this.Vexhausted = false;
      }
    }*/

    /*let that = this;
    $scope.updateprice = function(number) {
      that.Inentradas = number;
      if (number > 0) {
        that.totalprice = that.event.price * number;
        if (number > that.event.stock) {
          that.Vacept = false;
        } else {
          that.Vacept = true;
        }
      } else {
        that.totalprice = 0;
        that.Vacept = false;
      }
    }*/
    //[ng-change="updateprice()"]
    /*Events
    .gettype(event.type)
      .then(
      (Events) => {
        this.eventsLoaded = true;
        this.Events = Events;
        console.log(this.Events);
        let footer = document.getElementById('footer');
        footer.style.width = "100%";
    }
      );*/

  }
}

export default DetailOfertaCtrl;
