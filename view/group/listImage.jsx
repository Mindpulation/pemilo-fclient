import useSWR from 'swr';
import React from 'react';
import Image from 'next/image';
import { testingUse } from '../../api/index';

import St from '../../styles/view/group/ListImage.module.css';

const ListImage = ({fallback = null}) => {

  console.log("Render List");

  const resTesting = useSWR('/api/testing',()=>testingUse());    

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
              <Image className={St.content} key={i} width={100} height={100} src={e.url}></Image>
            );
          })
        }        
      </React.Fragment>
    );
  }
}


export default ListImage;