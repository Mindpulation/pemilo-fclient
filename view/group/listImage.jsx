import React,{useCallback, useContext} from 'react';
import Image from 'next/image';
import St from '../../styles/view/group/ListImage.module.css';

import { REDUCER } from '../../global/context/val'
import { OBJACTIONS } from '../../global/actions/val';
const { DISPATCHREDUCER } = REDUCER;

const reduceName = (param = new String()) => {
  let tmp = param.split(' ');
  return (tmp.length >= 2) ? tmp[0]+' '+tmp[1] : tmp[0];
}

const ListImage = ({fallback = null, data}) => {

  const disGroup = useContext(DISPATCHREDUCER);  

  const atClickImage = (param) => {    
    disGroup({tipe : OBJACTIONS.CHANGE_DATA_GROUP_DESC, payload:param});    
  }
  
  const changeDatatoList = useCallback(( param = [] )=>{
    
    let arr = new Array();        
    let len = param.length;
    for(let i=0;i<len;i++){
      const tmpObj = {
        id : i+1,
        photo : (param[i].photo === "") ? "/pemilo.svg" : param[i].photo,
        name : param[i].name
      }
      arr.push(tmpObj);
    }      
    return arr;

  },[]);

  if(data === undefined){        
    return (      
      <React.Fragment>
        {fallback}
      </React.Fragment>
    );
  }
  else{    
    return(
      <React.Fragment>
        {
          changeDatatoList(data).map((e,i)=>{
            return(
              <div className={St.box} key={i}>
                <Image onClick={()=>{atClickImage(e.id)}} className={St.content} width={100} height={100} src={e.photo}></Image>
                <p className={St.txt}>{reduceName(e.name)}</p>
              </div>
            );
          })          
        }    
      </React.Fragment>          
    );
  }
}


export default ListImage;