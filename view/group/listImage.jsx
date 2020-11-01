import useSWR from 'swr';
import React,{useContext} from 'react';
import Image from 'next/image';
import { testingUse } from '../../api/index';
import { REDUCER } from '../../global/context/val'
import St from '../../styles/view/group/ListImage.module.css';

import { OBJACTIONS } from '../../global/actions/val';

const { DISPATCHREDUCER } = REDUCER;

const reduceName = (param = new String()) => {
  let tmp = param.split(' ');
  return (tmp.length >= 2) ? tmp[0]+' '+tmp[1] : tmp[0];
}

const ListImage = ({fallback = null}) => {

  const disGroup = useContext(DISPATCHREDUCER);

  const resTesting = useSWR('/api/testing',()=>testingUse());    

  const atClickImage = (param) => {    
    disGroup({tipe : OBJACTIONS.CHANGE_DATA_GROUP_DESC, payload:param});    
  }

  if(resTesting.data == undefined){        
    return (      
      <React.Fragment>
        {fallback}
      </React.Fragment>
    );
  }
  else if(resTesting.data != undefined){    
    return(
      <React.Fragment>
        {
          resTesting.data.data.map((e, i)=>{
            return(
              <div className={St.box} key={i}>
                <Image onClick={()=>{atClickImage(e.id)}} className={St.content} width={100} height={100} src={e.url}></Image>
                <p className={St.txt}>{reduceName(e.title)}</p>
              </div>
            );
          })
        }    
      </React.Fragment>          
    );
  }
}


export default ListImage;