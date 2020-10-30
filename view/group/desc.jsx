import React, {useContext} from 'react';
import useSWR from 'swr';
import { REDUCER } from '../../global/context/val'
import St from '../../styles/view/group/Desc.module.css';

import { testingDetailUse } from '../../api/index';

const { STATEREDUCER } = REDUCER;

const Desc = ({fallback = null}) => {

  console.log("Desc");

  const state = useContext(STATEREDUCER);    

  const { data } = useSWR(`/api/testing/detail/${state.groupDesc}`, ()=>testingDetailUse(state.groupDesc));

  if(data == undefined){
    return(
      <React.Fragment>
        {fallback}
      </React.Fragment>
    );
  }
  else{
    return(
      <React.Fragment>
        <div className={St.box}>
          <div className={St.visi}>
            <h4 className={St.headertxt}>Visi</h4>
            <span className={St.destxt}>{data.data.title}</span>
          </div>
          <div className={St.misi}>
            <h4 className={St.headertxt}>Misi</h4>
            <span className={St.destxt}>{data.data.body}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Desc;