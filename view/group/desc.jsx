import React, {useContext} from 'react';
import { REDUCER } from '../../global/context/val'
import St from '../../styles/view/group/Desc.module.css';

const { STATEREDUCER } = REDUCER;

const Desc = ({fallback = null, data}) => {

  const state = useContext(STATEREDUCER);    

  const changeToList = (param = new String()) => {
    const changeData = param.replace(/\|}|{|}|"/g,'');     
    const spl = changeData.split(',');
    return spl;
  }

  let itemData = undefined;
  
  if(data != undefined){
    itemData = data[state.groupDesc-1];
  }

  if(itemData === undefined){
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
            <div  className={St.headertxt}>
              <span>Visi</span>
            </div>
            <span className={St.destxt}>{itemData.vision}</span>
          </div>
          <div className={St.misi}>
            <div  className={St.headertxt}>
              <span>Misi</span>
            </div>
            {
              changeToList(itemData.mission).map((e, i)=>(
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