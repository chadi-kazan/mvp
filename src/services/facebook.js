//TODO write an abstract higher api to access all those social media engines transparently
// it would delegate calls to proper providers accordingly
export const ensureLogin = async () => {
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
 const response = await FB.getLoginStatus();
 if (response.status === 'connected') {
  const loginResponse = await FB.login({ scope: 'user_actions.music' });
  console.log(loginResponse);
 }
}
