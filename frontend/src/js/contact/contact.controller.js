class ContactCtrl {
  constructor(AppConstants, $scope, Contact, $state, Toaster) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    $scope.contact = {
        inputName: "",
        inputEmail: "",
        inputSubject: "",
        inputMessage: ""
    };

    setTimeout(function(){
      let footer = document.getElementById('footer');
      footer.style.width = "100%";
    }, 0);

    $scope.SubmitContact = function () {
      console.log("Entra en la funcion");
      var data = {
        name: $scope.vm.inputName,
        from: 'ruralshoponti@gmail.com',
        to: $scope.vm.inputEmail,
        subject: $scope.vm.inputSubject,
        text: $scope.vm.inputMessage,
        type: 'admin'
      };
      console.log(data);
      
      Contact.sendEmail(data).then(function (response) {
        if (response) {
          console.log('Email sent correctly!');
          Toaster.showToaster('success','Email sent correctly!');
          setTimeout(function() {
            $state.go('app.ofertas');
          }, 2000);
        } else {
          Toaster.showToaster('error','Problem sending your email, please try again later!');
          console.log('Problem sending your email, please try again later!');
        }
      });
    };

  }
}

export default ContactCtrl;
