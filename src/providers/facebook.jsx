import React, { PureComponent } from 'react';

export default class Facebook extends PureComponent {
 componentDidMount() {
  console.log('initializing facebook');
  window.fbAsyncInit = function() {
     window.FB.init({
       appId      : '1904555776447565',
       cookie     : true,  // enable cookies to allow the server to access the session
       xfbml      : true,  // parse social plugins on this page
       version    : 'v2.8'
     });
     console.log('initialized facebook');
     window.FB.getLoginStatus(function (response) {
       if (response.status !== 'connected') {
         window.FB.login(function (loginResponse) {
           console.log(loginResponse);
         });
       }  
    }, { scope: 'user_actions.music' });
  };

  // pre load sdks
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-sdk'));
 } 
 render() {
  return <div />;
 }
}
