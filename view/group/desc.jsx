import React from 'react';
import useSWR from 'swr';

import St from '../../styles/view/group/Desc.module.css';

import { testingDetailUse } from '../../api/index';

const Desc = ({id, fallback = null}) => {

  const { data } = useSWR('/api/testing/detail', ()=>testingDetailUse(id));

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