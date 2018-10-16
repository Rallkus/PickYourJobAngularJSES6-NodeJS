class LogoutCtrl {
    constructor(User, $state, $scope, Toaster) {
      'ngInject';
      this._User = User;
      this._$state = $state;
      this._$scope = $scope;
      this._toaster = Toaster;
  
      this.title = $state.current.title;
      this.authType = $state.current.name.replace('app.', '');
    }
          
    logout(){
      this._User.logout();  
    };
  }
  export default LogoutCtrl;