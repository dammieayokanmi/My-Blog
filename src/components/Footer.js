import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          {/* <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a> */}
        </div>
        <a
          href="https://twitter.com/Ayokanm60947841"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/dammieayokanmi"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://codepen.io/Ayokanmi"
          target="_blank"
          rel="noopener noreferrer"
        >
          codepen
        </a>
      </footer>
    );
  }
}

export default Footer;