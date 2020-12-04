import React, {useContext, useEffect} from 'react';
import Head from 'next/head';
import Mobile from '../../../layout/mobile.jsx';
import Desc from '../../../view/group/desc.jsx';
import St from '../../../styles/page/Group.module.css';
import ListImage from  '../../../view/group/listImage.jsx';
import useSWR from 'swr';
import { getCandidateWithPositionAndRoom } from '../../../api/index.js';

import {useRouter} from 'next/router';
import {REDUCER} from '../../../global/context/val';
import { del, set, get } from '../../../hooks/localStorage.js';
import { OBJACTIONS } from '../../../global/actions/val.js';

export function getServerSideProps(context){
  const { group, room } = context.params
  return {
    props:{group, room}
  }
}

const { STATEREDUCER, DISPATCHREDUCER } = REDUCER;

const Group = ({group, room}) => {  

  const router = useRouter();

  const { data } = useSWR(`/api/candidate/getCandidate/${group}`, async ()=>{return await getCandidateWithPositionAndRoom(room, group)} );  

  const { groupDesc } = useContext(STATEREDUCER);  

  const disGroup = useContext(DISPATCHREDUCER);  

  useEffect(()=>{    
    const tmpget = get("Room");        
    if(tmpget === null){
      router.push("/page/vroom");
    }
    disGroup({tipe : OBJACTIONS.CHANGE_DATA_GROUP_DESC, payload:1});
  },[]);
  
  const saveChoosen = () => {
    if(data != undefined){      
      const tmp = data[groupDesc-1];              
      const en = get("Choosen");      
      const len = en.length;    
      for(let i=0;i<len;i++){
        if(en[i].position === group){
          en[i].sta = true;
          en[i].choose = tmp;          
          break;
        } 
      }            
      set("Choosen", en);
      router.push({
        pathname:'/page/[room]',
        query:{
          room : room
        }
      });
    }
  }

  if(data == undefined){
    return(
      <React.Fragment>
        <div>Loading..</div>
      </React.Fragment>
    );
  }

  else{  
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
              <ListImage fallback={<div>Loading..</div>} data = {data}></ListImage>
            </div>
          </div>  
  
          <Desc group={group} room={room} fallback={<div>Loading..</div>} data = {data} ></Desc>
  
          <div className={St.framebtn}>
            <button onClick={saveChoosen} className={St.btn} >PILIH</button>
          </div>
  
        </Mobile>        
  
      </React.Fragment>
    );

  }


}

export default Group;