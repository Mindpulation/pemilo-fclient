import Context from '../global/context'
import '../styles/globals.css'
import React from 'react';

function MyApp({ Component, pageProps }) {
  return(
    <React.Fragment>
      <Context>
        <Component {...pageProps} />
      </Context>
    </React.Fragment>
  ); 
}

export default MyApp
