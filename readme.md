This PickYourJob, the application that gives you work.

Build with an angularjs 1.5 frontend and a nodejs backend this application has multiple entries: home, contact, login, logout, profile and several social login.

Home is where the app starts and also shows all the offers available. Addicionally, it has an angularjs filter where you can look for something specific. Finally, each offer has his own button details, which leads to the detailoferta controller and shows a different view.

The different view that I just mencioned is just a view with the details of the offer selected and a gmap made with ng-map that has his own info window.

The contact section is just a formulary with angularjs validation, when the form is completed the button gets available and if everything is right the server sends an email to the email provided and the frontend redirects to the home page.

Every webpage has a login so we do, on the auth module we have involved both views, sign in and sign up, both have the same form but different controller so in order to do the frontend validation we use ng-required to be able to validate both without breaking up the sign in.

When a user is registered also is logged and when every user logs in (social login included) I use JWT technology in order to generate a token after passport.js authenticates user and returns to the frontend when is saved in local storage.

So the application detects when someone is logged and changes the menu and the logout just deletes the token saved in local storage.
