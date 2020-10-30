import useSWR, {mutate} from 'swr';
import React,{useContext} from 'react';
import Image from 'next/image';
import { testingUse } from '../../api/index';
import { REDUCER } from '../../global/context/val'
import St from '../../styles/view/group/ListImage.module.css';

import { OBJACTIONS } from '../../global/actions/val';

const { DISPATCHREDUCER } = REDUCER;

const ListImage = ({fallback = null}) => {

  const disGroup = useContext(DISPATCHREDUCER);

  console.log("Render List");

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
              <Image onClick={()=>{atClickImage(e.id)}} className={St.content} key={i} width={100} height={100} src={e.url}></Image>
            );
          })
        }        
      </React.Fragment>
    );
  }
}


export default ListImage;