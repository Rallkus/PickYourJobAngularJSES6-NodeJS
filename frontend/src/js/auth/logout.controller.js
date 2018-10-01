class LogoutCtrl {
    constructor(User, $state, $scope, Toaster) {
      'ngInject';
      this._User = User;
      this._$state = $state;
      this._$scope = $scope;
      this._toaster = Toaster;
  
      this.title = $state.current.title;
      this.authType = $state.current.name.replace('app.', '');

        
      
      /*this._User.attemptAuth(this.authType, null).then(
        (res) => {
          this._toaster.showToaster('success','Successfully Logged In');
          this._$state.go('app.home');
        },
        (err) => {
          this._toaster.showToaster('error','Error trying to login');
          this.errors = err.data.errors;
        }
      )*/
    }
          
    logout(){
      this._User.logout();  
    };
  }
  export default LogoutCtrl;