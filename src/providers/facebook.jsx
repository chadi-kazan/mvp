import React, { PureComponent } from 'react';

export default class Facebook extends PureComponent {
  constructor() {
    super();
    this.state = {
      initialized: false
    };
  }
  componentDidMount() {
    const self = this;
    if (window.FB) {
      this.setState({ initialized: true });
    } else {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId      : '1904555776447565',
          cookie     : true,  // enable cookies to allow the server to access the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.8'
        });
        self.setState({ initialized: true });
      };

      // pre load sdks
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_PI/sdk.js#xfbml=1&version=v2.8&appId=1904555776447565";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-sdk'));
    }
 } 
 render() {
   if (!this.state.initialized) {
     return <div className="provider-nosession">Loading...</div>;
   }
   return (
     <div className="main-workarea">
     <ul className="list-unstyled provider-nosession text-center">
        <li className="dbl-lst-margin"><h2>Facebook</h2></li>
        <li className="dbl-lst-margin bigger-text diluted-color">
         <div>Import Liked</div>
         <div>Facebook Music Pages</div>
        </li>
        <li>
           <div className="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false"></div>
         </li>
       <li>
           <div>
             <span className="secondary-text">Skip</span>
           </div>
          <hr />  
        </li>
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
