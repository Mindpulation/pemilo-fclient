import React from 'react';
import Head from 'next/head';
import Mobile from '../../../layout/mobile.jsx';
import Desc from '../../../view/group/desc.jsx';
import St from '../../../styles/page/Group.module.css';
import ListImage from  '../../../view/group/listImage.jsx';
import useSWR from 'swr';
import { getCandidateWithPositionAndRoom } from '../../../api/index.js';

export function getServerSideProps(context){
  const { group, room } = context.params
  return {
    props:{group, room}
  }
}

const Group = React.memo(({group, room}) => {   

  const { data } = useSWR(`/api/candidate/getCandidate`, ()=>{return getCandidateWithPositionAndRoom(room, group)} );  

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
            {/* <ListImage fallback={<div>Loading..</div>}></ListImage> */}
          </div>
        </div>  

        <Desc fallback={<div>Loading..</div>} data = {data} ></Desc>

        <div className={St.framebtn}>
          <button onClick={()=>{}} className={St.btn} >PILIH</button>
        </div>

      </Mobile>        

    </React.Fragment>
  );

});

export default Group;