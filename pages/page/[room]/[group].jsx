import React from 'react';
import Head from 'next/head';
import Mobile from '../../../layout/mobile.jsx';
import St from '../../../styles/page/Group.module.css';

import { useLink } from '../../../hooks/index.js';

const Group = () => {

  console.log("Render Group");

  const { group } = useLink();

  return(    
    <React.Fragment>
      
      <Head>
        <title>Page Candidate</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Mobile>
        <div className={St.row1}>
          <span className={St.txtHead}>Position <span className={St.txtSideHead}>{group}</span> </span>
        </div>
      </Mobile>

    </React.Fragment>
  );

}

export default Group;