import useSWR from 'swr';
import React from 'react';
import { testingUse } from '../../api/index';
import ImageBlur from '../../components/image/blur.jsx';

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
              <ImageBlur key={i} src={e.url} placeholder={e.thumbnailUrl} ></ImageBlur>
            );
          })
        }        
      </React.Fragment>
    );
  }
}


export default ListImage;