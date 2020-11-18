import React, {useContext, useEffect, useState} from 'react';
import { REDUCER } from '../../global/context/val'
import St from '../../styles/view/group/Desc.module.css';

import useSWR from 'swr';
import { getCandidateWithPositionAndRoom } from '../../api';

const { STATEREDUCER } = REDUCER;

const Desc = ({fallback = null, group, room}) => {    

  const {data} = useSWR(`/api/candidate/getCandidate/${group}`, async ()=>{return await getCandidateWithPositionAndRoom(room, group)});  

  const state = useContext(STATEREDUCER);    

  const changeToList = (param = new String()) => {
    const changeData = param.replace(/\|}|{|}|"/g,'');     
    const spl = changeData.split(',');
    return spl;
  }

  if(data === undefined){    
    return(
      <React.Fragment>
        {fallback}
      </React.Fragment>
    );
  }
  else if(data != undefined){
    return(
      <React.Fragment>
        <div className={St.box}>
          <div className={St.visi}>
            <div  className={St.headertxt}>
              <span>Visi</span>
            </div>
            <span className={St.destxt}>{data[state.groupDesc-1].vision}</span>
          </div>
          <div className={St.misi}>
            <div  className={St.headertxt}>
              <span>Misi</span>
            </div>
            {
              changeToList(data[state.groupDesc-1].mission).map((e, i)=>(
                <div key={i}>
                  <span className={St.destxt}>{e}</span>
                </div>                
              ))
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Desc;