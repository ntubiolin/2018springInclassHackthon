import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  appendFbBtn = (d, s, id) =>
  {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=1936882689935931';
    fjs.parentNode.insertBefore(js, fjs);
  };
  componentDidMount() {
    this.appendFbBtn(document, 'script', 'facebook-jssdk');
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
    //<script src="https://apis.google.com/js/platform.js" async defer></script>
  }
  render() {
    
   
    return (
      <div className="Login">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-centered">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">太鼓達人Login</h3>
                </div>
                <div class="panel-body">
                  <hr />
                  <div className="google-login-btn-wrapper">
                    <div class="g-signin2" data-onsuccess="onSignIn" data-width="300" data-height="50" data-longtitle="true"></div>
                  </div>
                  <br/>
                  <center><h4>OR</h4></center>
                  <dir className="fb-login-button-wrapper">
                    <div class="fb-login-button btn-md" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true"></div>
                  </dir>
                  
                 
			          </div>
              </div>
            </div>
	        </div>
        </div>
      </div>
    );
  }
}

export default Login;
/*
<form accept-charset="UTF-8" role="form">
  <fieldset>
    <div class="form-group">
      <input class="form-control" placeholder="yourmail@example.com" name="email" type="text" />
    </div>
    <div class="form-group">
      <input class="form-control" placeholder="Password" name="password" type="password" value="" />
    </div>
    <div class="checkbox">
      <label>
        <input name="remember" type="checkbox" value="Remember Me" />
      </label>
    </div>
    <input class="btn btn-lg btn-success btn-block" type="submit" value="Login" />
  </fieldset>
</form>
*/
/*

    <script>
      function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      };
       // This is called with the results from from FB.getLoginStatus().
        function statusChangeCallback(response) {
          console.log('statusChangeCallback');
          console.log(response);
          // The response object is returned with a status field that lets the
          // app know the current login status of the person.
          // Full docs on the response object can be found in the documentation
          // for FB.getLoginStatus().
          if (response.status === 'connected') {
            // Logged into your app and Facebook.
            testAPI();
          } else {
            // The person is not logged into your app or we are unable to tell.
            document.getElementById('status').innerHTML = 'Please log ' +
              'into this app.';
          }
        }

        // This function is called when someone finishes with the Login
        // Button.  See the onlogin handler attached to it in the sample
        // code below.
        function checkLoginState() {
          FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
          });
        }

        window.fbAsyncInit = function () {
          FB.init({
            appId: '1936882689935931',
            cookie: true,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.8' // use graph api version 2.8
          });

          // Now that we've initialized the JavaScript SDK, we call
          // FB.getLoginStatus().  This function gets the state of the
          // person visiting this page and can return one of three states to
          // the callback you provide.  They can be:
          //
          // 1. Logged into your app ('connected')
          // 2. Logged into Facebook, but not your app ('not_authorized')
          // 3. Not logged into Facebook and can't tell if they are logged into
          //    your app or not.
          //
          // These three cases are handled in the callback function.

          FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
          });

        };

        // Load the SDK asynchronously
        (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Here we run a very simple test of the Graph API after login is
        // successful.  See statusChangeCallback() for when this call is made.
        function testAPI() {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
              'Thanks for logging in, ' + response.name + '!';
          });
        }
    </script>

*/
