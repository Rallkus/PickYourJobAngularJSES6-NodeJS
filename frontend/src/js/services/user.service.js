export default class User {
  constructor(JWT, AppConstants, $http, $state, $q, Toaster) {
    'ngInject';

    this._toaster = Toaster;
    this._JWT = JWT;
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;
    this._$q = $q;
    this.current = null;
  }

  attemptAuth(type, credentials) {
    //let route = (type === 'login') ? '/login' : '';
    let route = '/'+ type;
    console.log(route);
    return this._$http({
      url: this._AppConstants.api + '/users' + route,
      method: 'POST',
      data: {
        user: credentials
      }
    }).then(
      (res) => {
        this._JWT.save(res.data.user.token);
        this.current = res.data.user;
        return res;
      }
    );
  }

  update(fields) {
    return this._$http({
      url:  this._AppConstants.api + '/user',
      method: 'PUT',
      data: { user: fields }
    }).then(
      (res) => {
        this.current = res.data.user;
        return res.data.user;
      }
    )
  }

  logout() {
    this.current = null;
    this._JWT.destroy();
    this._toaster.showToaster('success','Logged out');
    this._$state.go('app.ofertas');
  }

  verifyAuth() {
    let deferred = this._$q.defer();

    // check for JWT token
    if (!this._JWT.get()) {
      deferred.resolve(false);
      return deferred.promise;
    }

    if (this.current) {
      deferred.resolve(true);
    } else {
      this._$http({
        url: this._AppConstants.api + '/user',
        method: 'GET',
        headers: {
          Authorization: 'Token ' + this._JWT.get()
        }
      }).then(
        (res) => {
          this.current = res.data.user;
          deferred.resolve(true);
        },
        (err) => {
          this._JWT.destroy();
          deferred.resolve(false);
        }
      )
    }
    return deferred.promise;
  }

  ensureAuthIs(bool) {
    let deferred = this._$q.defer();
    this.verifyAuth().then((authValid) => {
      if (authValid !== bool) {
        this._$state.go('app.ofertas')
        deferred.resolve(false);
      } else {
        deferred.resolve(true);
      }
    });
    return deferred.promise;
  }
}
