import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

class SideBar extends PureComponent {
  render() {
  const { providers, user, match } = this.props;
  const css = provider => classNames(`fa fa-${provider.icon || "circle-o"}`);
    
  return (
   <div>
      <ul className="list-unstyled">
        <li><span className="fa fa-dashboard"></span> Dashboard</li>
        <li><ul className="list-unstyled">
        <li><span className="glyphicon glyphicon-plus"></span> Add New Source
        <span className="pull-right fa fa-caret-down"></span>
          </li>
        <li><ul className="list-unstyled">
        {providers.map((p, i) => (
              <li className={classNames({ selected: match.url.replace(/\//g, '') === p.name.toLowerCase() })} key={i}>
                <Link to={`/${p.id || 'other'}`}><i className={css(p)}></i> {`Add ${p.name}`}</Link></li>
          ))}
        </ul></li>
        </ul>
        </li>
        <li><i className="fa fa-chrome"></i> Download Chrome
        <hr /></li>
        <li>{user.name}<hr/></li>
        <li><a onClick={() => { }}><i className="fa fa-sign-out"></i> Logout</a></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
      </ul>
    </div>
  );
  }
}

SideBar.propTypes = {
 providers: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string
  })).isRequired,
 user: PropTypes.shape({
   name: PropTypes.string.isRequired
 }).isRequired,
 selected: PropTypes.string
};

SideBar.defaultProps = {
 providers: [{ id:'facebook', name: "Facebook", url: "https://www.facebook.com", icon: "facebook-square" },
 { name: "Youtube", url: "https://www.youtube.com", icon: "youtube-square" },
 { name: "SoundCloud", url: "https://www.soundcloud.com", icon: "soundcloud" },
 { name: "Spotify", url: "https://www.spotify.com", icon: "spotify" },
 { name: "HypeM", url: "https://www.hypem.com" },
 { name: "Subreddit" , url: "https://www.reddit.com", icon: "reddit-alien"},
 { name: "Manually Input Songs/Playlist" },
 { name: "Friend's Jamtrack Favorites" },
 { name: "Music blog" },
 { name: "Weekly Radio Show" }],
 user: {
   name: 'Mikey Ahdoot'
 }
};

/* export default connect(state => ({
  selected: state.mvp.selectedProvider,
  connectProvider: state.mvp.connectProvider,
}), dispatch => ({
  requestProviderChange: provider => dispatch(requestProviderChange(provider))
}))(SideBar); */
export default SideBar;


