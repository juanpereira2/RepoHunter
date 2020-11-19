import React from 'react';

import './styles.css';

class TopNav extends React.Component {
  tweet = 'GitHunt – Most starred projects on Github by @kamranahmedse https://github.com/kamranahmedse/githunt';

  render() {
    

    return (
      <div className='top-nav'>
        <div className="container clearfix">
          <a href='https://github.com/juanpereira2/RepoHunter'
             rel="noopener noreferrer"
             target='_blank'
             className="logo clearfix float-left">
            
            <div className="logo-text">
              <h4>RepoHunter</h4>
              <p className="text-muted d-none d-sm-inline-block d-md-inline-block d-xl-inline-block d-lg-inline-block">Most starred repositories of a language in github.</p>
              <p className="text-muted d-inline-block d-sm-none d-md-none d-xl-none d-lg-none">Top Github Projects</p>
            </div>
          </a>
          
        </div>
      </div>
    );
  }
}

export default TopNav;
