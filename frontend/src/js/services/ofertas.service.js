export default class Ofertas {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }
  
  getAll() {
    return this._$http({
      url: this._AppConstants.api + '/offer',
      method: 'GET',
    }).then((res) => res.data.offer);
  }

  getOffer(id) {
    return this._$http({
      url: this._AppConstants.api + '/offer/'+ id,
      method: 'GET',
    }).then((res) => res.data.ofertas);
  }
}
