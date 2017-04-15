import React, { PureComponent } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends PureComponent {
  constructor() {
    super();
    let token;
    try {
      token = JSON.parse(localStorage.getItem('facebook_token'));
      if (token) {
        const fiveMinsAgo = new Date().getTime() / 1000 | 0 - 300;
        if (fiveMinsAgo > token.expiresAt) {
          token = null;
        }
      }
    } catch (err) {
      token = null;
    }
    
    this.state = {
      token
    };
  }
  onFacebookResponse = response => {
    if (response.accessToken) {
      const expiresAt = (new Date().getTime() / 1000 | 0) + response.expiresIn;
      const facebookToken = { ...response, expiresAt };
      localStorage.setItem(`facebook_token`, JSON.stringify(facebookToken));
      window.FB.api(
          `/me/music`,
          function (musicResponse) {
            if (musicResponse && !musicResponse.error) {
              console.table(musicResponse);
            }
          }
      );
      // TODO dispatch an action to the store. for now, for the sake of the demo just change the state
      this.setState({ token: facebookToken });
   }
  }
  renderPageTitle(fbToken) {
    return fbToken ? null : <li className="dbl-lst-margin bigger-text diluted-color">
      <div>Import Liked</div>
      <div>Facebook Music Pages</div>
    </li>;
  }
  renderFBControl(fbToken) {
    if (fbToken) { 
      return <li><div><img src={fbToken.picture.data.url} /></div>
        <div>{fbToken.name}</div></li>;
    }
    const fbButtonStyle = {
      textTransform: 'none',
      marginBottom: '10px', 
      textShadow: '0 -1px 0 #354c8c',
      backgroundImage: 'linear-gradient(rgb(76, 105, 186), rgb(59, 85, 160))'
    };
    return <li>
      <FacebookLogin
        appId="1904555776447565"
        autoLoad={false}
        fields="name,picture"
        scope="user_actions.music"
        icon="fa fa-facebook"
        textButton="Connect with facebook"
        size="small"
        buttonStyle={fbButtonStyle}
        callback={this.onFacebookResponse} />
      <hr />
    </li>;
  }
 render() {
   const { token } = this.state;
   return (
     <div className="main-workarea">
     <ul className="list-unstyled provider-nosession text-center">
        <li className="dbl-lst-margin"><h2>Facebook</h2></li>
        {this.renderPageTitle(token)}
        {this.renderFBControl(token)}
        <li> 
            <div className="bigger-text"><span>Manually Add Facebook Page URL</span></div>
         </li>
        <li>
          <div className="diluted-color">Or enter keywords to search for a page</div> 
        </li>
        <li>
           <div><input type="text" className="rnd-edgs" style={{ width: '300px' }}
             placeholder="https://www.facebook.com/pagename" /></div> 
        </li> 
       </ul>
     </div>  
  );
 }
}
