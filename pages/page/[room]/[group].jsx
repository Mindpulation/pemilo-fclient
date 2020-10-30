import React, { useContext } from 'react';
import Head from 'next/head';
import Mobile from '../../../layout/mobile.jsx';
import Desc from '../../../view/group/desc.jsx';
import St from '../../../styles/page/Group.module.css';
import ListImage from  '../../../view/group/listImage.jsx';

import { useLink } from '../../../hooks/index.js';

const Group = React.memo(() => {  

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
          <span className={St.txtHead}>Position <span className={St.txtSideHead}>{group}</span></span>
        </div>

        <div className={St.row2}>
          <div className={St.wrap}>            
            <ListImage fallback={<div>Loading..</div>}></ListImage>                      
          </div>
        </div>  

        <Desc fallback={<div>Loading..</div>} ></Desc>

      </Mobile>        

    </React.Fragment>
  );

});

export default Group;