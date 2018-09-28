class AuthCtrl {
  constructor(User, $state, $scope, Toaster) {
    'ngInject';

    this._User = User;
    this._$state = $state;
    this._$scope = $scope;
    this._toaster = Toaster;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');
    console.log(this.authType);

    setTimeout(function(){
      let footer = document.getElementById('footer');
      footer.style.width = "100%";
    }, 0);
  }

  submitForm() {
    this.isSubmitting = true;
    this._User.attemptAuth(this.authType, this.formData).then(
      (res) => {
        this._toaster.showToaster('success','Successfully Logged In');
        this._$state.go('app.home');
      },
      (err) => {
        this._toaster.showToaster('error','Error trying to login');
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
}

export default AuthCtrl;
