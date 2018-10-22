class ProfileCtrl {
  constructor(profile, User) {
    'ngInject';

    this.profile = profile;
    console.log(this.profile);

    setTimeout(function(){
      let footer = document.getElementById('footer');
      footer.style.width = "100%";
    }, 0);

    if (User.current) {
      this.isUser = (User.current.username === this.profile.username);
    } else {
      this.isUser = false;
    }
  }
}


export default ProfileCtrl;
